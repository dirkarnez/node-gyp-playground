{
  'variables': {
    'openssl_fips':'false',
  },
  'targets': [{
    'target_name': 'node-gyp-playground',
    'include_dirs': [
        "src"
    ],

    'cflags_cc': [
      '-std=c++17',
      '-Wall'
    ],

    'sources': [
      'src/sum.cpp'
    ]
  }]
}
