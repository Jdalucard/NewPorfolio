const nextConfig = {
  async headers() {
    return [
      {
        source: '/assets/Jose_Martinez_FullStack_Mobile_Developer.pdf',
        headers: [
          {
            key: 'Content-Disposition',
            value: 'attachment; filename="Jose_Martinez_FullStack_Mobile_Developer.pdf"',
          },
          { key: 'Content-Type', value: 'application/pdf' },
        ],
      },
    ];
  },
};

export default nextConfig;
