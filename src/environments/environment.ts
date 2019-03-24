// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

// export const environment = {
//   production: false,
//   url: {
//     getAllFeed: 'http://127.0.0.1:8000/feed',
//     editComment: 'http://127.0.0.1:8000/feed/comment',
//     updateFeed: 'http://127.0.0.1:8000/feed',
//     deleteComment: 'http://127.0.0.1:8000/feed/comment',
//     imgSource: 'http://127.0.0.1:8000/feed/images/'
//   }
// };

// export const environment = {
//     production: true,
//     demo: true,
//     url: {
//       getAllFeed: 'https://demo.marax.ai:8001/feed',
//       editComment: 'https://demo.marax.ai:8001/feed/comment',
//       updateFeed: 'https://demo.marax.ai:8001/feed',
//       deleteComment: 'https://demo.marax.ai:8001/feed/comment',
//       imgSource: 'https://dailyn1.marax.ai:8001/feed/images/',
//       authentication: 'https://demo.marax.ai:8000/user/login',
//       validate: 'https://dailyn1.marax.ai:8003/validate',
//       integrations: {
//         firebase: 'https://dailyninja.marax.ai:4005',
//         msg91: 'https://dailyninja.marax.ai:4009',
//       },
//       filter: 'https://dailyninja.marax.ai:4002/segment',
//       getAllCards: 'https://dailyninja.marax.ai:4005/key',
//       saveCard: 'https://dailyninja.marax.ai:4005/key',
//       getGraph: 'https://dailyninja.marax.ai:4005/push/',
//       deleteCard: 'https://dailyninja.marax.ai:4005/key',
//       segments: 'https://dailyninja.marax.ai:4004',
//       takeActionNotification: 'https://dailyninja.marax.ai:4008',
//       sendMessage: {
//         firebase: 'https://dailyninja.marax.ai:4005/push/',
//         msg91: 'https://dailyninja.marax.ai:4009/send'
//       }
//     }
//   };


export const environment = {
    production: true,
    demo: false,
    url: 'http://139.59.33.14',
    services: {
        feed: {
            port: '8001',
            resources: {
                read: {
                    endpoint: 'feed',
                    method: 'get'
                },
                updateFeed: {
                    endpoint: 'feed',
                    method: 'patch'
                },
                editComment: {
                    endpoint: 'feed/comment',
                    method: 'patch'
                },
                deleteComment: {
                    endpoint: 'feed/comment',
                    method: 'delete'
                },
                imgSource: {
                    endpoint: 'feed/images/',
                    method: 'get'
                }
            },
        },
        authentication: {
            port: '4000',
            resources: {
                update: {
                    endpoint: 'user/login',
                    method: 'post'
                }
            },
        },
        validate: {
            port: '8003',
            resources: {
                read: {
                    endpoint: 'validate',
                    method: 'post'
                }
            }
        },
        integrations: {
            msg91: {
                port: '4009',
                resources: {
                    read: {
                        endpoint: 'key',
                        method: 'get'
                    },
                    create: {
                        endpoint: 'key',
                        method: 'put'
                    },
                    sendMsg: {
                        create: {
                            endpoint: 'send',
                            method: 'put'
                        },
                        read: {
                            endpoint: 'send',
                            method: 'get'
                        },
                    },
                    delete: {
                        endpoint: 'key',
                        method: 'delete'
                    }
                }
            },
            firebase: {
                port: '4005',
                resources: {
                    read: {
                        endpoint: 'key',
                        method: 'get'
                    },
                    create: {
                        endpoint: 'key',
                        method: 'put'
                    },
                    sendMsg: {
                        create: {
                            endpoint: 'push',
                            method: 'put'
                        },
                        read: {
                            endpoint: 'push',
                            method: 'get'
                        },
                    },
                    delete: {
                        endpoint: 'key',
                        method: 'delete'
                    }
                }
            }
        },
        segments: {
            port: '4004',
            resources: {
                read: {
                    endpoint: 'segments',
                    method: 'get'
                },
                create: {
                    endpoint: 'segments',
                    method: 'put'
                },
                update: {
                    endpoint: 'segments',
                    method: 'post'
                },
                delete: {
                    endpoint: 'segment',
                    method: 'delete'
                }
            }
        },
        cohorts: {
            port: '4004',
            resources: {
                read: {
                    one: {
                        endpoint: 'cohort',
                        method: 'get'
                    },
                    all: {
                        endpoint: 'cohorts',
                        method: 'get'
                    }
                },
                create: {
                    endpoint: 'cohort',
                    method: 'put'
                },
                update: {
                    endpoint: 'cohort',
                    method: 'patch'
                },
                delete: {
                    endpoint: 'cohort',
                    method: 'delete'
                }
            }
        },
        takeActionNotification: {
            port: '4008',
            resources: {
                read: {
                    endpoint: 'campaign',
                    method: 'get'
                },
                create: {
                    endpoint: 'campaign',
                    method: 'put'
                },
                delete: {
                    endpoint: 'campaign',
                    method: 'delete'
                }
            }
        },
        filter: {
            port: '4002',
            resources: {
                getFilters: {
                    endpoint: 'segment',
                    method: 'post'
                },
                getUsers: {
                    endpoint: 'segment/infotable',
                    method: 'post'
                }
            }
        }

    }
};
