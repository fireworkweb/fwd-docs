module.exports = {
    base: '/',
    locales: {
        '/': {
            lang: 'en-US',
            title: 'fwd Docs',
            description: 'Documentation and API for fwd',
        },
        '/pt-BR/': {
            lang: 'pt-BR',
            title: 'fwd Docs',
            description: 'Documentação e API para fwd',
        },
    },
    themeConfig: {
        search: false,
        locales: {
            '/': {
                // text for the language dropdown
                selectText: 'Languages',
                // label for this locale in the language dropdown
                label: 'English',
                // text for the edit-on-github link
                editLinkText: 'Edit this page on GitHub',
                // config for Service Worker
                serviceWorker: {
                    updatePopup: {
                        message: "New content is available.",
                        buttonText: "Refresh",
                    },
                },
                nav: [
                    { text: 'Guide', link: '/guide/' },
                ],
                sidebar: {
                    '/guide/': [
                        {
                            title: 'Guide',
                            collapsable: false,
                            children: [
                                'introduction',
                            ],
                        },
                    ],
                },
            },
            '/pt-BR/': {
                selectText: 'Linguagens',
                label: 'Português (Brasil)',
                editLinkText: 'Editar essa página no GitHub',
                serviceWorker: {
                    updatePopup: {
                        message: "Novo conteúdo disponível.",
                        buttonText: "Atualizar",
                    },
                },
                nav: [
                    { text: 'Guia', link: '/pt-BR/guia/' },
                ],
                sidebar: {
                    '/pt-BR/guia/': [
                        {
                            title: 'Guia',
                            collapsable: false,
                            children: [
                                'introducao',
                            ],
                        },
                    ],
                },
            },
        },

        nav: [
            { text: 'Guide', link: '/guide/' },
        ],
        sidebar: {
            '/guide/': [
                {
                    title: 'Guide',
                    collapsable: false,
                    children: [
                        'introduction',
                    ],
                },
            ],
        },
    },
};
