export default {
  titleTemplate: "%s - 보리쌀",
  openGraph: {
    type: "website",
    site_name: "보리쌀",
    images: [
      { url: "https://borissal-bucket.s3.ap-northeast-2.amazonaws.com/img/bori-ssal-og-image.png" },
    ],
  },
  additionalLinkTags: [
    {
      rel: "icon",
      href: "favicon.ico",
    }
  ],
  additionalMetaTags: [
    {
      name: 'naver-site-verification',
      content: 'c632ec6a64178fc81a403471d858e68a353b93c8',
    },
    {
      name: 'google-site-verification',
      content: 'Bipoq8kmJmLBM9sq8s6izgkp7AzHNiruOD1uIiyI8vk',
    },
  ],
};
