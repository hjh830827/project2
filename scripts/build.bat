: generate 실행
npm run generate && cd dist && mkdir html && move index.html C:\Workspace\nuxtjs-project1\dist\html\index.html && move C:\Workspace\nuxtjs-project1\dist\skt-product-select\index.html C:\Workspace\nuxtjs-project1\dist\html\skt-product-select.html && move C:\Workspace\nuxtjs-project1\dist\order-confirm\index.html C:\Workspace\nuxtjs-project1\dist\html\order-confirm.html && move 404.html C:\Workspace\nuxtjs-project1\dist\html\404.html && mkdir static && move _nuxt C:\Workspace\nuxtjs-project1\dist\static\js && move images C:\Workspace\nuxtjs-project1\dist\static && move fonts C:\Workspace\nuxtjs-project1\dist\static && move favicon.ico C:\Workspace\nuxtjs-project1\dist\static\images\ && rd /s /q skt-product-select && rd /s /q order-confirm && cd.. && gulp



