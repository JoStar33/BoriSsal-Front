import PassWordChangeDialog from '@/components/dialogs/PassWordChangeDialog/PassWordChangeDialog';
import Loading from '@/components/loading/Loading/Loading';
import UserDeliverAddressViewer from '@/components/user/UserDeliverAddressViewer/UserDeliverAddressViewer';
import { useLoginCheckQuery } from '@/hooks/auth/useLoginCheckQuery/useLoginCheckQuery';
import { useDeliverAddressQuery } from '@/hooks/user/useDeliverAddressQuery/useDeliverAddressQuery';
import { useProfileUpdateMutation } from '@/hooks/user/useProfileUpdateMutation/useProfileUpdateMutation';
import { useUserQuery } from '@/hooks/user/useUserQuery/useUserQuery';
import { initDeliver, initUser } from '@/utils/initData';
import { NextSeo } from 'next-seo';
import Image from 'next/image';
import Link from 'next/link';
import React, { useLayoutEffect, useState } from 'react';
import styles from './userpage.module.scss';

const UserPage = () => {
  let { data: user } = useUserQuery();
  const [dialog, setDialog] = useState<boolean>(false);
  let formData: FormData;
  useLayoutEffect(() => {
    formData = new FormData();
  });
  let { data: deliverAddress, isError, isLoading } = useDeliverAddressQuery();
  const loginCheck = useLoginCheckQuery();
  const { mutate } = useProfileUpdateMutation();
  const handleOnChangeProfileImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) {
      return;
    }
    const file: File = e.target.files[0];
    formData.append('img', file);
    mutate(formData);
  };
  if (!user) {
    user = initUser;
  }
  if (!deliverAddress) {
    deliverAddress = initDeliver;
  }
  return (
    <>
      {loginCheck.isLoading && <Loading />}
      {dialog && <PassWordChangeDialog setDialog={setDialog} />}
      <NextSeo title="사용자 페이지" description="사용자의 정보를 수정할 수 있는 페이지입니다." />
      <div className={styles.userpage_container}>
        <div className={styles.user_image}>
          <div style={{ position: 'relative', width: '10vw', height: '10vw' }}>
            <label className="input-file-button" htmlFor="input-file" style={{ cursor: 'pointer' }}>
              {user.profile_image && (
                <div>
                  <Image
                    style={{ borderRadius: '200px', objectFit: 'cover' }}
                    alt="프로필 이미지"
                    placeholder="blur"
                    fill
                    src={process.env.NEXT_PUBLIC_IMAGE_URL + user.profile_image}
                  />
                </div>
              )}
              {!user.profile_image && <div className={styles.none_image} />}
            </label>
            <input
              id="input-file"
              type="file"
              onChange={handleOnChangeProfileImage}
              style={{ display: 'none' }}
              accept="image/png, image/jpeg"
            />
          </div>
        </div>
        <div className={styles.user_info_container}>
          <h1>회원정보</h1>
          <div className={styles.user_info_part}>
            <p>회원 이메일: {user.email}</p>
            <p>회원 닉네임: {user.nick}</p>
            <button aria-label="비밀번호 변경 버튼" onClick={() => setDialog(true)}>
              비밀번호 변경
            </button>
          </div>
        </div>
        <UserDeliverAddressViewer deliverAddress={deliverAddress} isLoading={isLoading} isError={isError} />
        <div className={styles.button_container}>
          <Link href="/order-history" aria-label="주문내역 보러가기 링크">
            <button aria-label="주문내역 보러가기 버튼">주문내역 보러가기</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default UserPage;
