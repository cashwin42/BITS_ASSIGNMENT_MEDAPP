module.export = app => (
  app.use(
    createProxyMiddleware('/meds',
    {
      target:"http://3.229.117.214",
      changeOrigin: true
    }
  ),

  )
)
