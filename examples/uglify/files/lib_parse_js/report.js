__report = {
  "info": {
    "file": "/tmp/plato/uglify/lib/parse.js",
    "fileShort": "lib/parse.js",
    "fileSafe": "lib_parse_js",
    "link": "files/lib_parse_js/index.html"
  },
  "complexity": {
    "aggregate": {
      "line": 45,
      "complexity": {
        "sloc": {
          "physical": 1363,
          "logical": 1054
        },
        "cyclomatic": 250,
        "halstead": {
          "operators": {
            "distinct": 43,
            "total": 2322,
            "identifiers": [
              "__stripped__"
            ]
          },
          "operands": {
            "distinct": 541,
            "total": 2754,
            "identifiers": [
              "__stripped__"
            ]
          },
          "length": 5076,
          "vocabulary": 584,
          "difficulty": 109.44731977818854,
          "volume": 46647.54946087497,
          "effort": 5105449.26271325,
          "bugs": 15.549183153624991,
          "time": 283636.0701507361
        }
      }
    },
    "functions": [
      {
        "name": "is_letter",
        "line": 129,
        "complexity": {
          "sloc": {
            "physical": 5,
            "logical": 1
          },
          "cyclomatic": 3,
          "halstead": {
            "operators": {
              "distinct": 7,
              "total": 16,
              "identifiers": [
                "__stripped__"
              ]
            },
            "operands": {
              "distinct": 11,
              "total": 17,
              "identifiers": [
                "__stripped__"
              ]
            },
            "length": 33,
            "vocabulary": 18,
            "difficulty": 5.409090909090909,
            "volume": 137.6075250475963,
            "effort": 744.3316127574528,
            "bugs": 0.04586917501586544,
            "time": 41.351756264302935
          }
        }
      },
      {
        "name": "is_digit",
        "line": 135,
        "complexity": {
          "sloc": {
            "physical": 3,
            "logical": 1
          },
          "cyclomatic": 1,
          "halstead": {
            "operators": {
              "distinct": 4,
              "total": 4,
              "identifiers": [
                "__stripped__"
              ]
            },
            "operands": {
              "distinct": 3,
              "total": 5,
              "identifiers": [
                "__stripped__"
              ]
            },
            "length": 9,
            "vocabulary": 7,
            "difficulty": 3.3333333333333335,
            "volume": 25.26619429851844,
            "effort": 84.22064766172814,
            "bugs": 0.008422064766172813,
            "time": 4.678924870096008
          }
        }
      },
      {
        "name": "is_alphanumeric_char",
        "line": 139,
        "complexity": {
          "sloc": {
            "physical": 3,
            "logical": 1
          },
          "cyclomatic": 2,
          "halstead": {
            "operators": {
              "distinct": 3,
              "total": 4,
              "identifiers": [
                "__stripped__"
              ]
            },
            "operands": {
              "distinct": 3,
              "total": 5,
              "identifiers": [
                "__stripped__"
              ]
            },
            "length": 9,
            "vocabulary": 6,
            "difficulty": 2.5,
            "volume": 23.264662506490403,
            "effort": 58.161656266226004,
            "bugs": 0.007754887502163467,
            "time": 3.2312031259014447
          }
        }
      },
      {
        "name": "is_unicode_combining_mark",
        "line": 143,
        "complexity": {
          "sloc": {
            "physical": 3,
            "logical": 1
          },
          "cyclomatic": 2,
          "halstead": {
            "operators": {
              "distinct": 4,
              "total": 8,
              "identifiers": [
                "__stripped__"
              ]
            },
            "operands": {
              "distinct": 5,
              "total": 9,
              "identifiers": [
                "__stripped__"
              ]
            },
            "length": 17,
            "vocabulary": 9,
            "difficulty": 3.6,
            "volume": 53.88872502451932,
            "effort": 193.99941008826954,
            "bugs": 0.017962908341506437,
            "time": 10.777745004903863
          }
        }
      },
      {
        "name": "is_unicode_connector_punctuation",
        "line": 147,
        "complexity": {
          "sloc": {
            "physical": 3,
            "logical": 1
          },
          "cyclomatic": 1,
          "halstead": {
            "operators": {
              "distinct": 3,
              "total": 4,
              "identifiers": [
                "__stripped__"
              ]
            },
            "operands": {
              "distinct": 4,
              "total": 5,
              "identifiers": [
                "__stripped__"
              ]
            },
            "length": 9,
            "vocabulary": 7,
            "difficulty": 1.875,
            "volume": 25.26619429851844,
            "effort": 47.374114309722074,
            "bugs": 0.008422064766172813,
            "time": 2.6318952394290043
          }
        }
      },
      {
        "name": "is_identifier",
        "line": 151,
        "complexity": {
          "sloc": {
            "physical": 3,
            "logical": 1
          },
          "cyclomatic": 1,
          "halstead": {
            "operators": {
              "distinct": 5,
              "total": 6,
              "identifiers": [
                "__stripped__"
              ]
            },
            "operands": {
              "distinct": 4,
              "total": 6,
              "identifiers": [
                "__stripped__"
              ]
            },
            "length": 12,
            "vocabulary": 9,
            "difficulty": 3.75,
            "volume": 38.03910001730775,
            "effort": 142.64662506490407,
            "bugs": 0.012679700005769252,
            "time": 7.924812503605782
          }
        }
      },
      {
        "name": "is_identifier_start",
        "line": 155,
        "complexity": {
          "sloc": {
            "physical": 3,
            "logical": 1
          },
          "cyclomatic": 3,
          "halstead": {
            "operators": {
              "distinct": 4,
              "total": 6,
              "identifiers": [
                "__stripped__"
              ]
            },
            "operands": {
              "distinct": 4,
              "total": 7,
              "identifiers": [
                "__stripped__"
              ]
            },
            "length": 13,
            "vocabulary": 8,
            "difficulty": 3.5,
            "volume": 39,
            "effort": 136.5,
            "bugs": 0.013,
            "time": 7.583333333333333
          }
        }
      },
      {
        "name": "is_identifier_char",
        "line": 159,
        "complexity": {
          "sloc": {
            "physical": 10,
            "logical": 2
          },
          "cyclomatic": 6,
          "halstead": {
            "operators": {
              "distinct": 7,
              "total": 16,
              "identifiers": [
                "__stripped__"
              ]
            },
            "operands": {
              "distinct": 10,
              "total": 17,
              "identifiers": [
                "__stripped__"
              ]
            },
            "length": 33,
            "vocabulary": 17,
            "difficulty": 5.95,
            "volume": 134.8862737612612,
            "effort": 802.5733288795042,
            "bugs": 0.044962091253753736,
            "time": 44.58740715997246
          }
        }
      },
      {
        "name": "parse_js_number",
        "line": 170,
        "complexity": {
          "sloc": {
            "physical": 9,
            "logical": 8
          },
          "cyclomatic": 4,
          "halstead": {
            "operators": {
              "distinct": 5,
              "total": 21,
              "identifiers": [
                "__stripped__"
              ]
            },
            "operands": {
              "distinct": 12,
              "total": 22,
              "identifiers": [
                "__stripped__"
              ]
            },
            "length": 43,
            "vocabulary": 17,
            "difficulty": 4.583333333333333,
            "volume": 175.7609021737646,
            "effort": 805.5708016297544,
            "bugs": 0.058586967391254866,
            "time": 44.753933423875246
          }
        }
      },
      {
        "name": "JS_Parse_Error",
        "line": 180,
        "complexity": {
          "sloc": {
            "physical": 7,
            "logical": 5
          },
          "cyclomatic": 1,
          "halstead": {
            "operators": {
              "distinct": 3,
              "total": 12,
              "identifiers": [
                "__stripped__"
              ]
            },
            "operands": {
              "distinct": 7,
              "total": 20,
              "identifiers": [
                "__stripped__"
              ]
            },
            "length": 32,
            "vocabulary": 10,
            "difficulty": 4.285714285714286,
            "volume": 106.3016990363956,
            "effort": 455.5787101559811,
            "bugs": 0.035433899678798536,
            "time": 25.30992834199895
          }
        }
      },
      {
        "name": "<anonymous>.toString",
        "line": 188,
        "complexity": {
          "sloc": {
            "physical": 3,
            "logical": 1
          },
          "cyclomatic": 1,
          "halstead": {
            "operators": {
              "distinct": 3,
              "total": 15,
              "identifiers": [
                "__stripped__"
              ]
            },
            "operands": {
              "distinct": 11,
              "total": 15,
              "identifiers": [
                "__stripped__"
              ]
            },
            "length": 30,
            "vocabulary": 14,
            "difficulty": 2.0454545454545454,
            "volume": 114.22064766172811,
            "effort": 233.63314294444385,
            "bugs": 0.038073549220576035,
            "time": 12.979619052469102
          }
        }
      },
      {
        "name": "js_error",
        "line": 192,
        "complexity": {
          "sloc": {
            "physical": 9,
            "logical": 6
          },
          "cyclomatic": 1,
          "halstead": {
            "operators": {
              "distinct": 6,
              "total": 9,
              "identifiers": [
                "__stripped__"
              ]
            },
            "operands": {
              "distinct": 11,
              "total": 22,
              "identifiers": [
                "__stripped__"
              ]
            },
            "length": 31,
            "vocabulary": 17,
            "difficulty": 6,
            "volume": 126.71134807876054,
            "effort": 760.2680884725632,
            "bugs": 0.04223711602625351,
            "time": 42.23711602625352
          }
        }
      },
      {
        "name": "is_token",
        "line": 202,
        "complexity": {
          "sloc": {
            "physical": 3,
            "logical": 1
          },
          "cyclomatic": 2,
          "halstead": {
            "operators": {
              "distinct": 5,
              "total": 8,
              "identifiers": [
                "__stripped__"
              ]
            },
            "operands": {
              "distinct": 5,
              "total": 11,
              "identifiers": [
                "__stripped__"
              ]
            },
            "length": 19,
            "vocabulary": 10,
            "difficulty": 5.5,
            "volume": 63.11663380285989,
            "effort": 347.1414859157294,
            "bugs": 0.021038877934286628,
            "time": 19.28563810642941
          }
        }
      },
      {
        "name": "tokenizer",
        "line": 208,
        "complexity": {
          "sloc": {
            "physical": 326,
            "logical": 36
          },
          "cyclomatic": 1,
          "halstead": {
            "operators": {
              "distinct": 9,
              "total": 54,
              "identifiers": [
                "__stripped__"
              ]
            },
            "operands": {
              "distinct": 48,
              "total": 67,
              "identifiers": [
                "__stripped__"
              ]
            },
            "length": 121,
            "vocabulary": 57,
            "difficulty": 6.28125,
            "volume": 705.7796917139339,
            "effort": 4433.178688578147,
            "bugs": 0.23525989723797797,
            "time": 246.28770492100816
          }
        }
      },
      {
        "name": "peek",
        "line": 224,
        "complexity": {
          "sloc": {
            "physical": 1,
            "logical": 1
          },
          "cyclomatic": 1,
          "halstead": {
            "operators": {
              "distinct": 3,
              "total": 5,
              "identifiers": [
                "__stripped__"
              ]
            },
            "operands": {
              "distinct": 4,
              "total": 5,
              "identifiers": [
                "__stripped__"
              ]
            },
            "length": 10,
            "vocabulary": 7,
            "difficulty": 1.875,
            "volume": 28.07354922057604,
            "effort": 52.63790478858007,
            "bugs": 0.009357849740192013,
            "time": 2.924328043810004
          }
        }
      },
      {
        "name": "next",
        "line": 226,
        "complexity": {
          "sloc": {
            "physical": 13,
            "logical": 10
          },
          "cyclomatic": 4,
          "halstead": {
            "operators": {
              "distinct": 14,
              "total": 26,
              "identifiers": [
                "__stripped__"
              ]
            },
            "operands": {
              "distinct": 13,
              "total": 26,
              "identifiers": [
                "__stripped__"
              ]
            },
            "length": 52,
            "vocabulary": 27,
            "difficulty": 14,
            "volume": 247.25415011250038,
            "effort": 3461.5581015750054,
            "bugs": 0.08241805003750013,
            "time": 192.30878342083363
          }
        }
      },
      {
        "name": "find",
        "line": 240,
        "complexity": {
          "sloc": {
            "physical": 5,
            "logical": 4
          },
          "cyclomatic": 2,
          "halstead": {
            "operators": {
              "distinct": 10,
              "total": 12,
              "identifiers": [
                "__stripped__"
              ]
            },
            "operands": {
              "distinct": 8,
              "total": 14,
              "identifiers": [
                "__stripped__"
              ]
            },
            "length": 26,
            "vocabulary": 18,
            "difficulty": 8.75,
            "volume": 108.41805003750011,
            "effort": 948.6579378281259,
            "bugs": 0.036139350012500036,
            "time": 52.70321876822922
          }
        }
      },
      {
        "name": "start_token",
        "line": 246,
        "complexity": {
          "sloc": {
            "physical": 5,
            "logical": 3
          },
          "cyclomatic": 1,
          "halstead": {
            "operators": {
              "distinct": 2,
              "total": 9,
              "identifiers": [
                "__stripped__"
              ]
            },
            "operands": {
              "distinct": 7,
              "total": 12,
              "identifiers": [
                "__stripped__"
              ]
            },
            "length": 21,
            "vocabulary": 9,
            "difficulty": 1.7142857142857142,
            "volume": 66.56842503028857,
            "effort": 114.11730005192325,
            "bugs": 0.022189475010096188,
            "time": 6.339850002884625
          }
        }
      },
      {
        "name": "token",
        "line": 252,
        "complexity": {
          "sloc": {
            "physical": 25,
            "logical": 19
          },
          "cyclomatic": 6,
          "halstead": {
            "operators": {
              "distinct": 17,
              "total": 57,
              "identifiers": [
                "__stripped__"
              ]
            },
            "operands": {
              "distinct": 31,
              "total": 70,
              "identifiers": [
                "__stripped__"
              ]
            },
            "length": 127,
            "vocabulary": 48,
            "difficulty": 19.193548387096776,
            "volume": 709.2902375915869,
            "effort": 13613.796495709492,
            "bugs": 0.23643007919719564,
            "time": 756.3220275394162
          }
        }
      },
      {
        "name": "skip_whitespace",
        "line": 278,
        "complexity": {
          "sloc": {
            "physical": 4,
            "logical": 2
          },
          "cyclomatic": 2,
          "halstead": {
            "operators": {
              "distinct": 2,
              "total": 4,
              "identifiers": [
                "__stripped__"
              ]
            },
            "operands": {
              "distinct": 3,
              "total": 3,
              "identifiers": [
                "__stripped__"
              ]
            },
            "length": 7,
            "vocabulary": 5,
            "difficulty": 1,
            "volume": 16.253496664211536,
            "effort": 16.253496664211536,
            "bugs": 0.005417832221403845,
            "time": 0.9029720369006409
          }
        }
      },
      {
        "name": "read_while",
        "line": 283,
        "complexity": {
          "sloc": {
            "physical": 6,
            "logical": 6
          },
          "cyclomatic": 2,
          "halstead": {
            "operators": {
              "distinct": 8,
              "total": 12,
              "identifiers": [
                "__stripped__"
              ]
            },
            "operands": {
              "distinct": 8,
              "total": 14,
              "identifiers": [
                "__stripped__"
              ]
            },
            "length": 26,
            "vocabulary": 16,
            "difficulty": 7,
            "volume": 104,
            "effort": 728,
            "bugs": 0.034666666666666665,
            "time": 40.44444444444444
          }
        }
      },
      {
        "name": "parse_error",
        "line": 290,
        "complexity": {
          "sloc": {
            "physical": 3,
            "logical": 1
          },
          "cyclomatic": 1,
          "halstead": {
            "operators": {
              "distinct": 2,
              "total": 4,
              "identifiers": [
                "__stripped__"
              ]
            },
            "operands": {
              "distinct": 7,
              "total": 10,
              "identifiers": [
                "__stripped__"
              ]
            },
            "length": 14,
            "vocabulary": 9,
            "difficulty": 1.4285714285714286,
            "volume": 44.37895002019238,
            "effort": 63.39850002884626,
            "bugs": 0.014792983340064125,
            "time": 3.522138890491459
          }
        }
      },
      {
        "name": "read_num",
        "line": 294,
        "complexity": {
          "sloc": {
            "physical": 26,
            "logical": 12
          },
          "cyclomatic": 3,
          "halstead": {
            "operators": {
              "distinct": 10,
              "total": 24,
              "identifiers": [
                "__stripped__"
              ]
            },
            "operands": {
              "distinct": 17,
              "total": 28,
              "identifiers": [
                "__stripped__"
              ]
            },
            "length": 52,
            "vocabulary": 27,
            "difficulty": 8.235294117647058,
            "volume": 247.25415011250038,
            "effort": 2036.210647985297,
            "bugs": 0.08241805003750013,
            "time": 113.12281377696095
          }
        }
      },
      {
        "name": "<anonymous>",
        "line": 296,
        "complexity": {
          "sloc": {
            "physical": 16,
            "logical": 15
          },
          "cyclomatic": 13,
          "halstead": {
            "operators": {
              "distinct": 12,
              "total": 37,
              "identifiers": [
                "__stripped__"
              ]
            },
            "operands": {
              "distinct": 20,
              "total": 40,
              "identifiers": [
                "__stripped__"
              ]
            },
            "length": 77,
            "vocabulary": 32,
            "difficulty": 12,
            "volume": 385,
            "effort": 4620,
            "bugs": 0.12833333333333333,
            "time": 256.6666666666667
          }
        }
      },
      {
        "name": "read_escaped_char",
        "line": 321,
        "complexity": {
          "sloc": {
            "physical": 16,
            "logical": 24
          },
          "cyclomatic": 11,
          "halstead": {
            "operators": {
              "distinct": 8,
              "total": 34,
              "identifiers": [
                "__stripped__"
              ]
            },
            "operands": {
              "distinct": 29,
              "total": 35,
              "identifiers": [
                "__stripped__"
              ]
            },
            "length": 69,
            "vocabulary": 37,
            "difficulty": 4.827586206896552,
            "volume": 359.45228222839756,
            "effort": 1735.2868797232986,
            "bugs": 0.11981742740946585,
            "time": 96.40482665129437
          }
        }
      },
      {
        "name": "hex_bytes",
        "line": 338,
        "complexity": {
          "sloc": {
            "physical": 10,
            "logical": 7
          },
          "cyclomatic": 3,
          "halstead": {
            "operators": {
              "distinct": 10,
              "total": 16,
              "identifiers": [
                "__stripped__"
              ]
            },
            "operands": {
              "distinct": 12,
              "total": 20,
              "identifiers": [
                "__stripped__"
              ]
            },
            "length": 36,
            "vocabulary": 22,
            "difficulty": 8.333333333333334,
            "volume": 160.5395382709427,
            "effort": 1337.8294855911893,
            "bugs": 0.05351317942364757,
            "time": 74.32386031062163
          }
        }
      },
      {
        "name": "<anonymous>",
        "line": 349,
        "complexity": {
          "sloc": {
            "physical": 27,
            "logical": 17
          },
          "cyclomatic": 4,
          "halstead": {
            "operators": {
              "distinct": 13,
              "total": 32,
              "identifiers": [
                "__stripped__"
              ]
            },
            "operands": {
              "distinct": 20,
              "total": 34,
              "identifiers": [
                "__stripped__"
              ]
            },
            "length": 66,
            "vocabulary": 33,
            "difficulty": 11.049999999999999,
            "volume": 332.93001187765793,
            "effort": 3678.87663124812,
            "bugs": 0.11097667062588598,
            "time": 204.38203506934
          }
        }
      },
      {
        "name": "<anonymous>",
        "line": 357,
        "complexity": {
          "sloc": {
            "physical": 11,
            "logical": 11
          },
          "cyclomatic": 5,
          "halstead": {
            "operators": {
              "distinct": 9,
              "total": 24,
              "identifiers": [
                "__stripped__"
              ]
            },
            "operands": {
              "distinct": 10,
              "total": 20,
              "identifiers": [
                "__stripped__"
              ]
            },
            "length": 44,
            "vocabulary": 19,
            "difficulty": 9,
            "volume": 186.90881059151775,
            "effort": 1682.1792953236597,
            "bugs": 0.062302936863839246,
            "time": 93.45440529575887
          }
        }
      },
      {
        "name": "read_line_comment",
        "line": 377,
        "complexity": {
          "sloc": {
            "physical": 12,
            "logical": 10
          },
          "cyclomatic": 2,
          "halstead": {
            "operators": {
              "distinct": 9,
              "total": 26,
              "identifiers": [
                "__stripped__"
              ]
            },
            "operands": {
              "distinct": 15,
              "total": 32,
              "identifiers": [
                "__stripped__"
              ]
            },
            "length": 58,
            "vocabulary": 24,
            "difficulty": 9.6,
            "volume": 265.9278250418271,
            "effort": 2552.90712040154,
            "bugs": 0.08864260834727569,
            "time": 141.8281733556411
          }
        }
      },
      {
        "name": "<anonymous>",
        "line": 390,
        "complexity": {
          "sloc": {
            "physical": 14,
            "logical": 14
          },
          "cyclomatic": 3,
          "halstead": {
            "operators": {
              "distinct": 13,
              "total": 46,
              "identifiers": [
                "__stripped__"
              ]
            },
            "operands": {
              "distinct": 23,
              "total": 56,
              "identifiers": [
                "__stripped__"
              ]
            },
            "length": 102,
            "vocabulary": 36,
            "difficulty": 15.82608695652174,
            "volume": 527.3323501471158,
            "effort": 8345.607628415224,
            "bugs": 0.1757774500490386,
            "time": 463.64486824529024
          }
        }
      },
      {
        "name": "read_name",
        "line": 405,
        "complexity": {
          "sloc": {
            "physical": 22,
            "logical": 26
          },
          "cyclomatic": 8,
          "halstead": {
            "operators": {
              "distinct": 15,
              "total": 58,
              "identifiers": [
                "__stripped__"
              ]
            },
            "operands": {
              "distinct": 31,
              "total": 61,
              "identifiers": [
                "__stripped__"
              ]
            },
            "length": 119,
            "vocabulary": 46,
            "difficulty": 14.758064516129032,
            "volume": 657.3038727707846,
            "effort": 9700.532961052708,
            "bugs": 0.21910129092359484,
            "time": 538.9184978362615
          }
        }
      },
      {
        "name": "<anonymous>",
        "line": 428,
        "complexity": {
          "sloc": {
            "physical": 21,
            "logical": 25
          },
          "cyclomatic": 7,
          "halstead": {
            "operators": {
              "distinct": 14,
              "total": 39,
              "identifiers": [
                "__stripped__"
              ]
            },
            "operands": {
              "distinct": 16,
              "total": 44,
              "identifiers": [
                "__stripped__"
              ]
            },
            "length": 83,
            "vocabulary": 30,
            "difficulty": 19.25,
            "volume": 407.2719194355071,
            "effort": 7839.984449133512,
            "bugs": 0.13575730647850237,
            "time": 435.5546916185284
          }
        }
      },
      {
        "name": "read_operator",
        "line": 450,
        "complexity": {
          "sloc": {
            "physical": 13,
            "logical": 2
          },
          "cyclomatic": 2,
          "halstead": {
            "operators": {
              "distinct": 4,
              "total": 6,
              "identifiers": [
                "__stripped__"
              ]
            },
            "operands": {
              "distinct": 5,
              "total": 7,
              "identifiers": [
                "__stripped__"
              ]
            },
            "length": 13,
            "vocabulary": 9,
            "difficulty": 2.8,
            "volume": 41.20902501875006,
            "effort": 115.38527005250016,
            "bugs": 0.013736341672916687,
            "time": 6.410292780694453
          }
        }
      },
      {
        "name": "grow",
        "line": 451,
        "complexity": {
          "sloc": {
            "physical": 10,
            "logical": 8
          },
          "cyclomatic": 3,
          "halstead": {
            "operators": {
              "distinct": 8,
              "total": 15,
              "identifiers": [
                "__stripped__"
              ]
            },
            "operands": {
              "distinct": 6,
              "total": 12,
              "identifiers": [
                "__stripped__"
              ]
            },
            "length": 27,
            "vocabulary": 14,
            "difficulty": 8,
            "volume": 102.7985828955553,
            "effort": 822.3886631644424,
            "bugs": 0.03426619429851843,
            "time": 45.688259064691245
          }
        }
      },
      {
        "name": "handle_slash",
        "line": 464,
        "complexity": {
          "sloc": {
            "physical": 15,
            "logical": 12
          },
          "cyclomatic": 4,
          "halstead": {
            "operators": {
              "distinct": 8,
              "total": 29,
              "identifiers": [
                "__stripped__"
              ]
            },
            "operands": {
              "distinct": 14,
              "total": 29,
              "identifiers": [
                "__stripped__"
              ]
            },
            "length": 58,
            "vocabulary": 22,
            "difficulty": 8.285714285714286,
            "volume": 258.64703388096325,
            "effort": 2143.075423585124,
            "bugs": 0.08621567796032108,
            "time": 119.05974575472912
          }
        }
      },
      {
        "name": "handle_dot",
        "line": 480,
        "complexity": {
          "sloc": {
            "physical": 6,
            "logical": 2
          },
          "cyclomatic": 2,
          "halstead": {
            "operators": {
              "distinct": 4,
              "total": 9,
              "identifiers": [
                "__stripped__"
              ]
            },
            "operands": {
              "distinct": 9,
              "total": 10,
              "identifiers": [
                "__stripped__"
              ]
            },
            "length": 19,
            "vocabulary": 13,
            "difficulty": 2.2222222222222223,
            "volume": 70.30835464468075,
            "effort": 156.24078809929057,
            "bugs": 0.02343611821489358,
            "time": 8.68004378329392
          }
        }
      },
      {
        "name": "read_word",
        "line": 487,
        "complexity": {
          "sloc": {
            "physical": 7,
            "logical": 2
          },
          "cyclomatic": 4,
          "halstead": {
            "operators": {
              "distinct": 6,
              "total": 15,
              "identifiers": [
                "__stripped__"
              ]
            },
            "operands": {
              "distinct": 10,
              "total": 20,
              "identifiers": [
                "__stripped__"
              ]
            },
            "length": 35,
            "vocabulary": 16,
            "difficulty": 6,
            "volume": 140,
            "effort": 840,
            "bugs": 0.04666666666666667,
            "time": 46.666666666666664
          }
        }
      },
      {
        "name": "with_eof_error",
        "line": 495,
        "complexity": {
          "sloc": {
            "physical": 10,
            "logical": 1
          },
          "cyclomatic": 1,
          "halstead": {
            "operators": {
              "distinct": 2,
              "total": 2,
              "identifiers": [
                "__stripped__"
              ]
            },
            "operands": {
              "distinct": 3,
              "total": 3,
              "identifiers": [
                "__stripped__"
              ]
            },
            "length": 5,
            "vocabulary": 5,
            "difficulty": 1,
            "volume": 11.60964047443681,
            "effort": 11.60964047443681,
            "bugs": 0.0038698801581456034,
            "time": 0.6449800263576005
          }
        }
      },
      {
        "name": "<anonymous>",
        "line": 496,
        "complexity": {
          "sloc": {
            "physical": 8,
            "logical": 7
          },
          "cyclomatic": 2,
          "halstead": {
            "operators": {
              "distinct": 7,
              "total": 8,
              "identifiers": [
                "__stripped__"
              ]
            },
            "operands": {
              "distinct": 6,
              "total": 9,
              "identifiers": [
                "__stripped__"
              ]
            },
            "length": 17,
            "vocabulary": 13,
            "difficulty": 5.25,
            "volume": 62.907475208398566,
            "effort": 330.26424484409245,
            "bugs": 0.02096915840279952,
            "time": 18.34801360244958
          }
        }
      },
      {
        "name": "next_token",
        "line": 506,
        "complexity": {
          "sloc": {
            "physical": 19,
            "logical": 25
          },
          "cyclomatic": 12,
          "halstead": {
            "operators": {
              "distinct": 13,
              "total": 50,
              "identifiers": [
                "__stripped__"
              ]
            },
            "operands": {
              "distinct": 32,
              "total": 44,
              "identifiers": [
                "__stripped__"
              ]
            },
            "length": 94,
            "vocabulary": 45,
            "difficulty": 8.9375,
            "volume": 516.2341910549894,
            "effort": 4613.843082553968,
            "bugs": 0.17207806368499648,
            "time": 256.32461569744265
          }
        }
      },
      {
        "name": "next_token.context",
        "line": 526,
        "complexity": {
          "sloc": {
            "physical": 4,
            "logical": 3
          },
          "cyclomatic": 2,
          "halstead": {
            "operators": {
              "distinct": 3,
              "total": 3,
              "identifiers": [
                "__stripped__"
              ]
            },
            "operands": {
              "distinct": 2,
              "total": 5,
              "identifiers": [
                "__stripped__"
              ]
            },
            "length": 8,
            "vocabulary": 5,
            "difficulty": 3.75,
            "volume": 18.575424759098897,
            "effort": 69.65784284662087,
            "bugs": 0.006191808253032966,
            "time": 3.8698801581456035
          }
        }
      },
      {
        "name": "<anonymous>",
        "line": 553,
        "complexity": {
          "sloc": {
            "physical": 9,
            "logical": 8
          },
          "cyclomatic": 3,
          "halstead": {
            "operators": {
              "distinct": 7,
              "total": 21,
              "identifiers": [
                "__stripped__"
              ]
            },
            "operands": {
              "distinct": 9,
              "total": 25,
              "identifiers": [
                "__stripped__"
              ]
            },
            "length": 46,
            "vocabulary": 16,
            "difficulty": 9.722222222222221,
            "volume": 184,
            "effort": 1788.8888888888887,
            "bugs": 0.06133333333333333,
            "time": 99.38271604938271
          }
        }
      },
      {
        "name": "parse",
        "line": 583,
        "complexity": {
          "sloc": {
            "physical": 825,
            "logical": 63
          },
          "cyclomatic": 2,
          "halstead": {
            "operators": {
              "distinct": 12,
              "total": 107,
              "identifiers": [
                "__stripped__"
              ]
            },
            "operands": {
              "distinct": 67,
              "total": 104,
              "identifiers": [
                "__stripped__"
              ]
            },
            "length": 211,
            "vocabulary": 79,
            "difficulty": 9.313432835820896,
            "volume": 1330.0977378653688,
            "effort": 12387.77594668642,
            "bugs": 0.4433659126217896,
            "time": 688.2097748159123
          }
        }
      },
      {
        "name": "is",
        "line": 604,
        "complexity": {
          "sloc": {
            "physical": 3,
            "logical": 1
          },
          "cyclomatic": 1,
          "halstead": {
            "operators": {
              "distinct": 3,
              "total": 3,
              "identifiers": [
                "__stripped__"
              ]
            },
            "operands": {
              "distinct": 5,
              "total": 7,
              "identifiers": [
                "__stripped__"
              ]
            },
            "length": 10,
            "vocabulary": 8,
            "difficulty": 2.0999999999999996,
            "volume": 30,
            "effort": 62.999999999999986,
            "bugs": 0.01,
            "time": 3.499999999999999
          }
        }
      },
      {
        "name": "peek",
        "line": 608,
        "complexity": {
          "sloc": {
            "physical": 1,
            "logical": 1
          },
          "cyclomatic": 2,
          "halstead": {
            "operators": {
              "distinct": 5,
              "total": 7,
              "identifiers": [
                "__stripped__"
              ]
            },
            "operands": {
              "distinct": 3,
              "total": 6,
              "identifiers": [
                "__stripped__"
              ]
            },
            "length": 13,
            "vocabulary": 8,
            "difficulty": 5,
            "volume": 39,
            "effort": 195,
            "bugs": 0.013,
            "time": 10.833333333333334
          }
        }
      },
      {
        "name": "next",
        "line": 610,
        "complexity": {
          "sloc": {
            "physical": 13,
            "logical": 8
          },
          "cyclomatic": 3,
          "halstead": {
            "operators": {
              "distinct": 9,
              "total": 26,
              "identifiers": [
                "__stripped__"
              ]
            },
            "operands": {
              "distinct": 12,
              "total": 30,
              "identifiers": [
                "__stripped__"
              ]
            },
            "length": 56,
            "vocabulary": 21,
            "difficulty": 11.25,
            "volume": 245.9697756756106,
            "effort": 2767.159976350619,
            "bugs": 0.08198992522520354,
            "time": 153.73110979725664
          }
        }
      },
      {
        "name": "prev",
        "line": 624,
        "complexity": {
          "sloc": {
            "physical": 3,
            "logical": 1
          },
          "cyclomatic": 1,
          "halstead": {
            "operators": {
              "distinct": 2,
              "total": 2,
              "identifiers": [
                "__stripped__"
              ]
            },
            "operands": {
              "distinct": 2,
              "total": 2,
              "identifiers": [
                "__stripped__"
              ]
            },
            "length": 4,
            "vocabulary": 4,
            "difficulty": 1,
            "volume": 8,
            "effort": 8,
            "bugs": 0.0026666666666666666,
            "time": 0.4444444444444444
          }
        }
      },
      {
        "name": "croak",
        "line": 628,
        "complexity": {
          "sloc": {
            "physical": 8,
            "logical": 2
          },
          "cyclomatic": 4,
          "halstead": {
            "operators": {
              "distinct": 6,
              "total": 16,
              "identifiers": [
                "__stripped__"
              ]
            },
            "operands": {
              "distinct": 14,
              "total": 27,
              "identifiers": [
                "__stripped__"
              ]
            },
            "length": 43,
            "vocabulary": 20,
            "difficulty": 5.785714285714286,
            "volume": 185.8429080801566,
            "effort": 1075.2339681780488,
            "bugs": 0.06194763602671887,
            "time": 59.735220454336044
          }
        }
      },
      {
        "name": "token_error",
        "line": 637,
        "complexity": {
          "sloc": {
            "physical": 3,
            "logical": 1
          },
          "cyclomatic": 1,
          "halstead": {
            "operators": {
              "distinct": 2,
              "total": 3,
              "identifiers": [
                "__stripped__"
              ]
            },
            "operands": {
              "distinct": 5,
              "total": 8,
              "identifiers": [
                "__stripped__"
              ]
            },
            "length": 11,
            "vocabulary": 7,
            "difficulty": 1.6,
            "volume": 30.880904142633646,
            "effort": 49.409446628213836,
            "bugs": 0.010293634714211216,
            "time": 2.7449692571229907
          }
        }
      },
      {
        "name": "unexpected",
        "line": 641,
        "complexity": {
          "sloc": {
            "physical": 5,
            "logical": 3
          },
          "cyclomatic": 2,
          "halstead": {
            "operators": {
              "distinct": 6,
              "total": 11,
              "identifiers": [
                "__stripped__"
              ]
            },
            "operands": {
              "distinct": 9,
              "total": 15,
              "identifiers": [
                "__stripped__"
              ]
            },
            "length": 26,
            "vocabulary": 15,
            "difficulty": 5,
            "volume": 101.57915548582149,
            "effort": 507.89577742910745,
            "bugs": 0.033859718495273826,
            "time": 28.21643207939486
          }
        }
      },
      {
        "name": "expect_token",
        "line": 647,
        "complexity": {
          "sloc": {
            "physical": 6,
            "logical": 3
          },
          "cyclomatic": 2,
          "halstead": {
            "operators": {
              "distinct": 5,
              "total": 19,
              "identifiers": [
                "__stripped__"
              ]
            },
            "operands": {
              "distinct": 12,
              "total": 23,
              "identifiers": [
                "__stripped__"
              ]
            },
            "length": 42,
            "vocabulary": 17,
            "difficulty": 4.791666666666667,
            "volume": 171.67343933251428,
            "effort": 822.6018968016309,
            "bugs": 0.05722447977750476,
            "time": 45.70010537786838
          }
        }
      },
      {
        "name": "expect",
        "line": 654,
        "complexity": {
          "sloc": {
            "physical": 1,
            "logical": 1
          },
          "cyclomatic": 1,
          "halstead": {
            "operators": {
              "distinct": 2,
              "total": 2,
              "identifiers": [
                "__stripped__"
              ]
            },
            "operands": {
              "distinct": 3,
              "total": 4,
              "identifiers": [
                "__stripped__"
              ]
            },
            "length": 6,
            "vocabulary": 5,
            "difficulty": 1.3333333333333333,
            "volume": 13.931568569324174,
            "effort": 18.575424759098897,
            "bugs": 0.004643856189774725,
            "time": 1.0319680421721609
          }
        }
      },
      {
        "name": "can_insert_semicolon",
        "line": 656,
        "complexity": {
          "sloc": {
            "physical": 5,
            "logical": 1
          },
          "cyclomatic": 3,
          "halstead": {
            "operators": {
              "distinct": 6,
              "total": 10,
              "identifiers": [
                "__stripped__"
              ]
            },
            "operands": {
              "distinct": 9,
              "total": 10,
              "identifiers": [
                "__stripped__"
              ]
            },
            "length": 20,
            "vocabulary": 15,
            "difficulty": 3.3333333333333335,
            "volume": 78.13781191217038,
            "effort": 260.4593730405679,
            "bugs": 0.026045937304056792,
            "time": 14.46996516892044
          }
        }
      },
      {
        "name": "semicolon",
        "line": 662,
        "complexity": {
          "sloc": {
            "physical": 4,
            "logical": 5
          },
          "cyclomatic": 3,
          "halstead": {
            "operators": {
              "distinct": 4,
              "total": 8,
              "identifiers": [
                "__stripped__"
              ]
            },
            "operands": {
              "distinct": 6,
              "total": 6,
              "identifiers": [
                "__stripped__"
              ]
            },
            "length": 14,
            "vocabulary": 10,
            "difficulty": 2,
            "volume": 46.50699332842308,
            "effort": 93.01398665684616,
            "bugs": 0.01550233110947436,
            "time": 5.16744370315812
          }
        }
      },
      {
        "name": "parenthesised",
        "line": 667,
        "complexity": {
          "sloc": {
            "physical": 6,
            "logical": 4
          },
          "cyclomatic": 1,
          "halstead": {
            "operators": {
              "distinct": 4,
              "total": 6,
              "identifiers": [
                "__stripped__"
              ]
            },
            "operands": {
              "distinct": 6,
              "total": 8,
              "identifiers": [
                "__stripped__"
              ]
            },
            "length": 14,
            "vocabulary": 10,
            "difficulty": 2.6666666666666665,
            "volume": 46.50699332842308,
            "effort": 124.01864887579487,
            "bugs": 0.01550233110947436,
            "time": 6.889924937544159
          }
        }
      },
      {
        "name": "embed_tokens",
        "line": 674,
        "complexity": {
          "sloc": {
            "physical": 10,
            "logical": 1
          },
          "cyclomatic": 1,
          "halstead": {
            "operators": {
              "distinct": 2,
              "total": 2,
              "identifiers": [
                "__stripped__"
              ]
            },
            "operands": {
              "distinct": 2,
              "total": 2,
              "identifiers": [
                "__stripped__"
              ]
            },
            "length": 4,
            "vocabulary": 4,
            "difficulty": 1,
            "volume": 8,
            "effort": 8,
            "bugs": 0.0026666666666666666,
            "time": 0.4444444444444444
          }
        }
      },
      {
        "name": "<anonymous>",
        "line": 675,
        "complexity": {
          "sloc": {
            "physical": 8,
            "logical": 6
          },
          "cyclomatic": 1,
          "halstead": {
            "operators": {
              "distinct": 5,
              "total": 14,
              "identifiers": [
                "__stripped__"
              ]
            },
            "operands": {
              "distinct": 7,
              "total": 14,
              "identifiers": [
                "__stripped__"
              ]
            },
            "length": 28,
            "vocabulary": 12,
            "difficulty": 5,
            "volume": 100.37895002019238,
            "effort": 501.8947501009619,
            "bugs": 0.03345965000673079,
            "time": 27.883041672275663
          }
        }
      },
      {
        "name": "<anonymous>",
        "line": 685,
        "complexity": {
          "sloc": {
            "physical": 119,
            "logical": 83
          },
          "cyclomatic": 36,
          "halstead": {
            "operators": {
              "distinct": 18,
              "total": 179,
              "identifiers": [
                "__stripped__"
              ]
            },
            "operands": {
              "distinct": 93,
              "total": 183,
              "identifiers": [
                "__stripped__"
              ]
            },
            "length": 362,
            "vocabulary": 111,
            "difficulty": 17.70967741935484,
            "volume": 2459.5785436187384,
            "effort": 43558.34259505443,
            "bugs": 0.8198595145395795,
            "time": 2419.9079219474684
          }
        }
      },
      {
        "name": "labeled_statement",
        "line": 805,
        "complexity": {
          "sloc": {
            "physical": 15,
            "logical": 10
          },
          "cyclomatic": 2,
          "halstead": {
            "operators": {
              "distinct": 11,
              "total": 26,
              "identifiers": [
                "__stripped__"
              ]
            },
            "operands": {
              "distinct": 19,
              "total": 29,
              "identifiers": [
                "__stripped__"
              ]
            },
            "length": 55,
            "vocabulary": 30,
            "difficulty": 8.394736842105264,
            "volume": 269.8789827584685,
            "effort": 2265.5630394724067,
            "bugs": 0.08995966091948951,
            "time": 125.8646133040226
          }
        }
      },
      {
        "name": "<anonymous>",
        "line": 807,
        "complexity": {
          "sloc": {
            "physical": 1,
            "logical": 1
          },
          "cyclomatic": 1,
          "halstead": {
            "operators": {
              "distinct": 3,
              "total": 4,
              "identifiers": [
                "__stripped__"
              ]
            },
            "operands": {
              "distinct": 3,
              "total": 5,
              "identifiers": [
                "__stripped__"
              ]
            },
            "length": 9,
            "vocabulary": 6,
            "difficulty": 2.5,
            "volume": 23.264662506490403,
            "effort": 58.161656266226004,
            "bugs": 0.007754887502163467,
            "time": 3.2312031259014447
          }
        }
      },
      {
        "name": "simple_statement",
        "line": 821,
        "complexity": {
          "sloc": {
            "physical": 3,
            "logical": 2
          },
          "cyclomatic": 1,
          "halstead": {
            "operators": {
              "distinct": 6,
              "total": 7,
              "identifiers": [
                "__stripped__"
              ]
            },
            "operands": {
              "distinct": 7,
              "total": 9,
              "identifiers": [
                "__stripped__"
              ]
            },
            "length": 16,
            "vocabulary": 13,
            "difficulty": 3.8571428571428577,
            "volume": 59.207035490257475,
            "effort": 228.3699940338503,
            "bugs": 0.019735678496752493,
            "time": 12.687221890769461
          }
        }
      },
      {
        "name": "break_cont",
        "line": 825,
        "complexity": {
          "sloc": {
            "physical": 14,
            "logical": 12
          },
          "cyclomatic": 5,
          "halstead": {
            "operators": {
              "distinct": 15,
              "total": 29,
              "identifiers": [
                "__stripped__"
              ]
            },
            "operands": {
              "distinct": 19,
              "total": 30,
              "identifiers": [
                "__stripped__"
              ]
            },
            "length": 59,
            "vocabulary": 34,
            "difficulty": 11.842105263157896,
            "volume": 300.16030763377006,
            "effort": 3554.5299588209614,
            "bugs": 0.10005343587792336,
            "time": 197.4738866011645
          }
        }
      },
      {
        "name": "<anonymous>",
        "line": 831,
        "complexity": {
          "sloc": {
            "physical": 1,
            "logical": 1
          },
          "cyclomatic": 1,
          "halstead": {
            "operators": {
              "distinct": 3,
              "total": 4,
              "identifiers": [
                "__stripped__"
              ]
            },
            "operands": {
              "distinct": 3,
              "total": 5,
              "identifiers": [
                "__stripped__"
              ]
            },
            "length": 9,
            "vocabulary": 6,
            "difficulty": 2.5,
            "volume": 23.264662506490403,
            "effort": 58.161656266226004,
            "bugs": 0.007754887502163467,
            "time": 3.2312031259014447
          }
        }
      },
      {
        "name": "for_",
        "line": 840,
        "complexity": {
          "sloc": {
            "physical": 16,
            "logical": 10
          },
          "cyclomatic": 5,
          "halstead": {
            "operators": {
              "distinct": 11,
              "total": 26,
              "identifiers": [
                "__stripped__"
              ]
            },
            "operands": {
              "distinct": 23,
              "total": 33,
              "identifiers": [
                "__stripped__"
              ]
            },
            "length": 59,
            "vocabulary": 34,
            "difficulty": 7.891304347826087,
            "volume": 300.16030763377006,
            "effort": 2368.6563406751857,
            "bugs": 0.10005343587792336,
            "time": 131.5920189263992
          }
        }
      },
      {
        "name": "regular_for",
        "line": 857,
        "complexity": {
          "sloc": {
            "physical": 13,
            "logical": 10
          },
          "cyclomatic": 3,
          "halstead": {
            "operators": {
              "distinct": 8,
              "total": 21,
              "identifiers": [
                "__stripped__"
              ]
            },
            "operands": {
              "distinct": 17,
              "total": 32,
              "identifiers": [
                "__stripped__"
              ]
            },
            "length": 53,
            "vocabulary": 25,
            "difficulty": 7.529411764705882,
            "volume": 246.1243780580604,
            "effort": 1853.171787731278,
            "bugs": 0.0820414593526868,
            "time": 102.95398820729322
          }
        }
      },
      {
        "name": "for_in",
        "line": 871,
        "complexity": {
          "sloc": {
            "physical": 11,
            "logical": 8
          },
          "cyclomatic": 2,
          "halstead": {
            "operators": {
              "distinct": 10,
              "total": 19,
              "identifiers": [
                "__stripped__"
              ]
            },
            "operands": {
              "distinct": 18,
              "total": 25,
              "identifiers": [
                "__stripped__"
              ]
            },
            "length": 44,
            "vocabulary": 28,
            "difficulty": 6.944444444444445,
            "volume": 211.52361657053456,
            "effort": 1468.9140039620456,
            "bugs": 0.07050787219017819,
            "time": 81.60633355344697
          }
        }
      },
      {
        "name": "function_",
        "line": 883,
        "complexity": {
          "sloc": {
            "physical": 36,
            "logical": 13
          },
          "cyclomatic": 9,
          "halstead": {
            "operators": {
              "distinct": 16,
              "total": 38,
              "identifiers": [
                "__stripped__"
              ]
            },
            "operands": {
              "distinct": 27,
              "total": 45,
              "identifiers": [
                "__stripped__"
              ]
            },
            "length": 83,
            "vocabulary": 43,
            "difficulty": 13.333333333333334,
            "volume": 450.3799746402741,
            "effort": 6005.066328536988,
            "bugs": 0.1501266582134247,
            "time": 333.6147960298327
          }
        }
      },
      {
        "name": "<anonymous>",
        "line": 898,
        "complexity": {
          "sloc": {
            "physical": 8,
            "logical": 8
          },
          "cyclomatic": 3,
          "halstead": {
            "operators": {
              "distinct": 8,
              "total": 12,
              "identifiers": [
                "__stripped__"
              ]
            },
            "operands": {
              "distinct": 12,
              "total": 16,
              "identifiers": [
                "__stripped__"
              ]
            },
            "length": 28,
            "vocabulary": 20,
            "difficulty": 5.333333333333333,
            "volume": 121.01398665684616,
            "effort": 645.4079288365128,
            "bugs": 0.040337995552282055,
            "time": 35.85599604647294
          }
        }
      },
      {
        "name": "<anonymous>",
        "line": 906,
        "complexity": {
          "sloc": {
            "physical": 11,
            "logical": 9
          },
          "cyclomatic": 1,
          "halstead": {
            "operators": {
              "distinct": 8,
              "total": 19,
              "identifiers": [
                "__stripped__"
              ]
            },
            "operands": {
              "distinct": 11,
              "total": 24,
              "identifiers": [
                "__stripped__"
              ]
            },
            "length": 43,
            "vocabulary": 19,
            "difficulty": 8.727272727272727,
            "volume": 182.66088307807416,
            "effort": 1594.131343226829,
            "bugs": 0.06088696102602472,
            "time": 88.56285240149049
          }
        }
      },
      {
        "name": "if_",
        "line": 920,
        "complexity": {
          "sloc": {
            "physical": 12,
            "logical": 10
          },
          "cyclomatic": 2,
          "halstead": {
            "operators": {
              "distinct": 8,
              "total": 17,
              "identifiers": [
                "__stripped__"
              ]
            },
            "operands": {
              "distinct": 14,
              "total": 20,
              "identifiers": [
                "__stripped__"
              ]
            },
            "length": 37,
            "vocabulary": 22,
            "difficulty": 5.714285714285714,
            "volume": 164.99896988958,
            "effort": 942.8512565118857,
            "bugs": 0.05499965662986,
            "time": 52.38062536177143
          }
        }
      },
      {
        "name": "block_",
        "line": 933,
        "complexity": {
          "sloc": {
            "physical": 10,
            "logical": 8
          },
          "cyclomatic": 3,
          "halstead": {
            "operators": {
              "distinct": 9,
              "total": 15,
              "identifiers": [
                "__stripped__"
              ]
            },
            "operands": {
              "distinct": 12,
              "total": 15,
              "identifiers": [
                "__stripped__"
              ]
            },
            "length": 30,
            "vocabulary": 21,
            "difficulty": 5.625,
            "volume": 131.76952268336282,
            "effort": 741.2035650939159,
            "bugs": 0.04392317422778761,
            "time": 41.177975838550886
          }
        }
      },
      {
        "name": "switch_body_",
        "line": 944,
        "complexity": {
          "sloc": {
            "physical": 34,
            "logical": 35
          },
          "cyclomatic": 9,
          "halstead": {
            "operators": {
              "distinct": 13,
              "total": 66,
              "identifiers": [
                "__stripped__"
              ]
            },
            "operands": {
              "distinct": 30,
              "total": 79,
              "identifiers": [
                "__stripped__"
              ]
            },
            "length": 145,
            "vocabulary": 43,
            "difficulty": 17.116666666666667,
            "volume": 786.8083894318042,
            "effort": 13467.53693244105,
            "bugs": 0.26226946314393473,
            "time": 748.196496246725
          }
        }
      },
      {
        "name": "try_",
        "line": 979,
        "complexity": {
          "sloc": {
            "physical": 32,
            "logical": 27
          },
          "cyclomatic": 4,
          "halstead": {
            "operators": {
              "distinct": 11,
              "total": 50,
              "identifiers": [
                "__stripped__"
              ]
            },
            "operands": {
              "distinct": 28,
              "total": 59,
              "identifiers": [
                "__stripped__"
              ]
            },
            "length": 109,
            "vocabulary": 39,
            "difficulty": 11.589285714285715,
            "volume": 576.1088418559851,
            "effort": 6676.689970795257,
            "bugs": 0.1920362806186617,
            "time": 370.92722059973653
          }
        }
      },
      {
        "name": "vardefs",
        "line": 1012,
        "complexity": {
          "sloc": {
            "physical": 15,
            "logical": 11
          },
          "cyclomatic": 4,
          "halstead": {
            "operators": {
              "distinct": 14,
              "total": 26,
              "identifiers": [
                "__stripped__"
              ]
            },
            "operands": {
              "distinct": 25,
              "total": 32,
              "identifiers": [
                "__stripped__"
              ]
            },
            "length": 58,
            "vocabulary": 39,
            "difficulty": 8.96,
            "volume": 306.5533286940104,
            "effort": 2746.7178250983334,
            "bugs": 0.10218444289800348,
            "time": 152.5954347276852
          }
        }
      },
      {
        "name": "var_",
        "line": 1028,
        "complexity": {
          "sloc": {
            "physical": 7,
            "logical": 4
          },
          "cyclomatic": 1,
          "halstead": {
            "operators": {
              "distinct": 5,
              "total": 9,
              "identifiers": [
                "__stripped__"
              ]
            },
            "operands": {
              "distinct": 9,
              "total": 11,
              "identifiers": [
                "__stripped__"
              ]
            },
            "length": 20,
            "vocabulary": 14,
            "difficulty": 3.055555555555556,
            "volume": 76.14709844115208,
            "effort": 232.67168968129803,
            "bugs": 0.025382366147050694,
            "time": 12.926204982294335
          }
        }
      },
      {
        "name": "const_",
        "line": 1036,
        "complexity": {
          "sloc": {
            "physical": 7,
            "logical": 4
          },
          "cyclomatic": 1,
          "halstead": {
            "operators": {
              "distinct": 5,
              "total": 9,
              "identifiers": [
                "__stripped__"
              ]
            },
            "operands": {
              "distinct": 9,
              "total": 10,
              "identifiers": [
                "__stripped__"
              ]
            },
            "length": 19,
            "vocabulary": 14,
            "difficulty": 2.7777777777777777,
            "volume": 72.33974351909447,
            "effort": 200.94373199748463,
            "bugs": 0.024113247839698156,
            "time": 11.163540666526924
          }
        }
      },
      {
        "name": "new_",
        "line": 1044,
        "complexity": {
          "sloc": {
            "physical": 17,
            "logical": 14
          },
          "cyclomatic": 2,
          "halstead": {
            "operators": {
              "distinct": 11,
              "total": 24,
              "identifiers": [
                "__stripped__"
              ]
            },
            "operands": {
              "distinct": 23,
              "total": 31,
              "identifiers": [
                "__stripped__"
              ]
            },
            "length": 55,
            "vocabulary": 34,
            "difficulty": 7.413043478260869,
            "volume": 279.8104562687687,
            "effort": 2074.2470779923938,
            "bugs": 0.09327015208958957,
            "time": 115.2359487773552
          }
        }
      },
      {
        "name": "as_atom_node",
        "line": 1062,
        "complexity": {
          "sloc": {
            "physical": 31,
            "logical": 43
          },
          "cyclomatic": 9,
          "halstead": {
            "operators": {
              "distinct": 11,
              "total": 62,
              "identifiers": [
                "__stripped__"
              ]
            },
            "operands": {
              "distinct": 26,
              "total": 71,
              "identifiers": [
                "__stripped__"
              ]
            },
            "length": 133,
            "vocabulary": 37,
            "difficulty": 15.01923076923077,
            "volume": 692.8572976286504,
            "effort": 10406.183643230308,
            "bugs": 0.23095243254288345,
            "time": 578.1213135127949
          }
        }
      },
      {
        "name": "expr_atom",
        "line": 1094,
        "complexity": {
          "sloc": {
            "physical": 33,
            "logical": 26
          },
          "cyclomatic": 8,
          "halstead": {
            "operators": {
              "distinct": 8,
              "total": 54,
              "identifiers": [
                "__stripped__"
              ]
            },
            "operands": {
              "distinct": 33,
              "total": 62,
              "identifiers": [
                "__stripped__"
              ]
            },
            "length": 116,
            "vocabulary": 41,
            "difficulty": 7.515151515151516,
            "volume": 621.4760325356978,
            "effort": 4670.4865475410015,
            "bugs": 0.20715867751189926,
            "time": 259.47147486338895
          }
        }
      },
      {
        "name": "expr_list",
        "line": 1128,
        "complexity": {
          "sloc": {
            "physical": 14,
            "logical": 17
          },
          "cyclomatic": 5,
          "halstead": {
            "operators": {
              "distinct": 15,
              "total": 32,
              "identifiers": [
                "__stripped__"
              ]
            },
            "operands": {
              "distinct": 20,
              "total": 39,
              "identifiers": [
                "__stripped__"
              ]
            },
            "length": 71,
            "vocabulary": 35,
            "difficulty": 14.625,
            "volume": 364.17909420309263,
            "effort": 5326.11925272023,
            "bugs": 0.12139303140103087,
            "time": 295.8955140400128
          }
        }
      },
      {
        "name": "<anonymous>",
        "line": 1143,
        "complexity": {
          "sloc": {
            "physical": 6,
            "logical": 3
          },
          "cyclomatic": 1,
          "halstead": {
            "operators": {
              "distinct": 7,
              "total": 8,
              "identifiers": [
                "__stripped__"
              ]
            },
            "operands": {
              "distinct": 10,
              "total": 10,
              "identifiers": [
                "__stripped__"
              ]
            },
            "length": 18,
            "vocabulary": 17,
            "difficulty": 3.5,
            "volume": 73.57433114250613,
            "effort": 257.51015899877143,
            "bugs": 0.02452477704750204,
            "time": 14.30611994437619
          }
        }
      },
      {
        "name": "<anonymous>",
        "line": 1150,
        "complexity": {
          "sloc": {
            "physical": 42,
            "logical": 37
          },
          "cyclomatic": 7,
          "halstead": {
            "operators": {
              "distinct": 17,
              "total": 74,
              "identifiers": [
                "__stripped__"
              ]
            },
            "operands": {
              "distinct": 37,
              "total": 84,
              "identifiers": [
                "__stripped__"
              ]
            },
            "length": 158,
            "vocabulary": 54,
            "difficulty": 19.2972972972973,
            "volume": 909.2722253418282,
            "effort": 17546.49645659636,
            "bugs": 0.3030907417806094,
            "time": 974.8053586997978
          }
        }
      },
      {
        "name": "as_property_name",
        "line": 1193,
        "complexity": {
          "sloc": {
            "physical": 15,
            "logical": 12
          },
          "cyclomatic": 7,
          "halstead": {
            "operators": {
              "distinct": 8,
              "total": 16,
              "identifiers": [
                "__stripped__"
              ]
            },
            "operands": {
              "distinct": 13,
              "total": 15,
              "identifiers": [
                "__stripped__"
              ]
            },
            "length": 31,
            "vocabulary": 21,
            "difficulty": 4.615384615384615,
            "volume": 136.16184010614157,
            "effort": 628.4392620283456,
            "bugs": 0.04538728003538052,
            "time": 34.91329233490809
          }
        }
      },
      {
        "name": "as_name",
        "line": 1209,
        "complexity": {
          "sloc": {
            "physical": 13,
            "logical": 10
          },
          "cyclomatic": 5,
          "halstead": {
            "operators": {
              "distinct": 8,
              "total": 14,
              "identifiers": [
                "__stripped__"
              ]
            },
            "operands": {
              "distinct": 11,
              "total": 13,
              "identifiers": [
                "__stripped__"
              ]
            },
            "length": 27,
            "vocabulary": 19,
            "difficulty": 4.7272727272727275,
            "volume": 114.6940428629768,
            "effort": 542.1900208067995,
            "bugs": 0.03823134762099227,
            "time": 30.12166782259997
          }
        }
      },
      {
        "name": "as_symbol",
        "line": 1223,
        "complexity": {
          "sloc": {
            "physical": 14,
            "logical": 11
          },
          "cyclomatic": 4,
          "halstead": {
            "operators": {
              "distinct": 12,
              "total": 27,
              "identifiers": [
                "__stripped__"
              ]
            },
            "operands": {
              "distinct": 19,
              "total": 31,
              "identifiers": [
                "__stripped__"
              ]
            },
            "length": 58,
            "vocabulary": 31,
            "difficulty": 9.789473684210526,
            "volume": 287.3433860024388,
            "effort": 2812.940515602822,
            "bugs": 0.0957811286674796,
            "time": 156.27447308904567
          }
        }
      },
      {
        "name": "subscripts",
        "line": 1238,
        "complexity": {
          "sloc": {
            "physical": 33,
            "logical": 25
          },
          "cyclomatic": 4,
          "halstead": {
            "operators": {
              "distinct": 10,
              "total": 47,
              "identifiers": [
                "__stripped__"
              ]
            },
            "operands": {
              "distinct": 26,
              "total": 61,
              "identifiers": [
                "__stripped__"
              ]
            },
            "length": 108,
            "vocabulary": 36,
            "difficulty": 11.730769230769232,
            "volume": 558.3519001557697,
            "effort": 6549.897290288838,
            "bugs": 0.18611730005192323,
            "time": 363.88318279382435
          }
        }
      },
      {
        "name": "maybe_unary",
        "line": 1272,
        "complexity": {
          "sloc": {
            "physical": 18,
            "logical": 14
          },
          "cyclomatic": 3,
          "halstead": {
            "operators": {
              "distinct": 9,
              "total": 44,
              "identifiers": [
                "__stripped__"
              ]
            },
            "operands": {
              "distinct": 20,
              "total": 52,
              "identifiers": [
                "__stripped__"
              ]
            },
            "length": 96,
            "vocabulary": 29,
            "difficulty": 11.700000000000001,
            "volume": 466.366175532247,
            "effort": 5456.48425372729,
            "bugs": 0.15545539184408233,
            "time": 303.13801409596056
          }
        }
      },
      {
        "name": "make_unary",
        "line": 1291,
        "complexity": {
          "sloc": {
            "physical": 5,
            "logical": 5
          },
          "cyclomatic": 3,
          "halstead": {
            "operators": {
              "distinct": 11,
              "total": 15,
              "identifiers": [
                "__stripped__"
              ]
            },
            "operands": {
              "distinct": 12,
              "total": 19,
              "identifiers": [
                "__stripped__"
              ]
            },
            "length": 34,
            "vocabulary": 23,
            "difficulty": 8.708333333333332,
            "volume": 153.80110650593844,
            "effort": 1339.3513024892136,
            "bugs": 0.05126703550197948,
            "time": 74.4084056938452
          }
        }
      },
      {
        "name": "expr_op",
        "line": 1297,
        "complexity": {
          "sloc": {
            "physical": 17,
            "logical": 14
          },
          "cyclomatic": 5,
          "halstead": {
            "operators": {
              "distinct": 14,
              "total": 36,
              "identifiers": [
                "__stripped__"
              ]
            },
            "operands": {
              "distinct": 23,
              "total": 50,
              "identifiers": [
                "__stripped__"
              ]
            },
            "length": 86,
            "vocabulary": 37,
            "difficulty": 15.217391304347824,
            "volume": 448.0129894440897,
            "effort": 6817.588969801364,
            "bugs": 0.1493376631480299,
            "time": 378.7549427667425
          }
        }
      },
      {
        "name": "expr_ops",
        "line": 1315,
        "complexity": {
          "sloc": {
            "physical": 3,
            "logical": 1
          },
          "cyclomatic": 1,
          "halstead": {
            "operators": {
              "distinct": 2,
              "total": 3,
              "identifiers": [
                "__stripped__"
              ]
            },
            "operands": {
              "distinct": 5,
              "total": 6,
              "identifiers": [
                "__stripped__"
              ]
            },
            "length": 9,
            "vocabulary": 7,
            "difficulty": 1.2,
            "volume": 25.26619429851844,
            "effort": 30.319433158222125,
            "bugs": 0.008422064766172813,
            "time": 1.6844129532345624
          }
        }
      },
      {
        "name": "maybe_conditional",
        "line": 1319,
        "complexity": {
          "sloc": {
            "physical": 17,
            "logical": 13
          },
          "cyclomatic": 2,
          "halstead": {
            "operators": {
              "distinct": 9,
              "total": 24,
              "identifiers": [
                "__stripped__"
              ]
            },
            "operands": {
              "distinct": 22,
              "total": 31,
              "identifiers": [
                "__stripped__"
              ]
            },
            "length": 55,
            "vocabulary": 31,
            "difficulty": 6.340909090909092,
            "volume": 272.4807970712782,
            "effort": 1727.7759632474233,
            "bugs": 0.09082693235709273,
            "time": 95.98755351374574
          }
        }
      },
      {
        "name": "is_assignable",
        "line": 1337,
        "complexity": {
          "sloc": {
            "physical": 12,
            "logical": 10
          },
          "cyclomatic": 7,
          "halstead": {
            "operators": {
              "distinct": 8,
              "total": 16,
              "identifiers": [
                "__stripped__"
              ]
            },
            "operands": {
              "distinct": 13,
              "total": 16,
              "identifiers": [
                "__stripped__"
              ]
            },
            "length": 32,
            "vocabulary": 21,
            "difficulty": 4.923076923076923,
            "volume": 140.55415752892034,
            "effort": 691.9589293731464,
            "bugs": 0.04685138584297345,
            "time": 38.442162742952576
          }
        }
      },
      {
        "name": "maybe_assign",
        "line": 1350,
        "complexity": {
          "sloc": {
            "physical": 18,
            "logical": 14
          },
          "cyclomatic": 3,
          "halstead": {
            "operators": {
              "distinct": 10,
              "total": 28,
              "identifiers": [
                "__stripped__"
              ]
            },
            "operands": {
              "distinct": 22,
              "total": 34,
              "identifiers": [
                "__stripped__"
              ]
            },
            "length": 62,
            "vocabulary": 32,
            "difficulty": 7.727272727272727,
            "volume": 310,
            "effort": 2395.454545454545,
            "bugs": 0.10333333333333333,
            "time": 133.08080808080805
          }
        }
      },
      {
        "name": "expression",
        "line": 1369,
        "complexity": {
          "sloc": {
            "physical": 14,
            "logical": 10
          },
          "cyclomatic": 2,
          "halstead": {
            "operators": {
              "distinct": 10,
              "total": 20,
              "identifiers": [
                "__stripped__"
              ]
            },
            "operands": {
              "distinct": 19,
              "total": 26,
              "identifiers": [
                "__stripped__"
              ]
            },
            "length": 46,
            "vocabulary": 29,
            "difficulty": 6.842105263157895,
            "volume": 223.46712577586834,
            "effort": 1528.985597413836,
            "bugs": 0.07448904192528945,
            "time": 84.94364430076867
          }
        }
      },
      {
        "name": "in_loop",
        "line": 1384,
        "complexity": {
          "sloc": {
            "physical": 6,
            "logical": 4
          },
          "cyclomatic": 1,
          "halstead": {
            "operators": {
              "distinct": 7,
              "total": 8,
              "identifiers": [
                "__stripped__"
              ]
            },
            "operands": {
              "distinct": 4,
              "total": 8,
              "identifiers": [
                "__stripped__"
              ]
            },
            "length": 16,
            "vocabulary": 11,
            "difficulty": 7,
            "volume": 55.350905898196764,
            "effort": 387.45634128737737,
            "bugs": 0.018450301966065587,
            "time": 21.525352293743186
          }
        }
      },
      {
        "name": "<anonymous>",
        "line": 1391,
        "complexity": {
          "sloc": {
            "physical": 15,
            "logical": 15
          },
          "cyclomatic": 3,
          "halstead": {
            "operators": {
              "distinct": 13,
              "total": 34,
              "identifiers": [
                "__stripped__"
              ]
            },
            "operands": {
              "distinct": 15,
              "total": 35,
              "identifiers": [
                "__stripped__"
              ]
            },
            "length": 69,
            "vocabulary": 28,
            "difficulty": 15.166666666666668,
            "volume": 331.7074896219747,
            "effort": 5030.896925933283,
            "bugs": 0.11056916320732489,
            "time": 279.49427366296015
          }
        }
      }
    ],
    "maintainability": 61.69468832524307,
    "module": "lib/parse.js"
  },
  "jshint": {
    "messages": [
      {
        "severity": "error",
        "line": 45,
        "column": 1,
        "message": "Use the function form of \"use strict\".",
        "source": "Use the function form of \"use strict\"."
      },
      {
        "severity": "error",
        "line": 50,
        "column": 5,
        "message": "Bad line breaking before '+'.",
        "source": "Bad line breaking before '{a}'."
      },
      {
        "severity": "error",
        "line": 62,
        "column": 38,
        "message": "Unescaped '-'.",
        "source": "Unescaped '{a}'."
      },
      {
        "severity": "error",
        "line": 131,
        "column": 9,
        "message": "Bad line breaking before '||'.",
        "source": "Bad line breaking before '{a}'."
      },
      {
        "severity": "error",
        "line": 132,
        "column": 9,
        "message": "Bad line breaking before '||'.",
        "source": "Bad line breaking before '{a}'."
      },
      {
        "severity": "error",
        "line": 133,
        "column": 2,
        "message": "Unnecessary semicolon.",
        "source": "Unnecessary semicolon."
      },
      {
        "severity": "error",
        "line": 137,
        "column": 2,
        "message": "Unnecessary semicolon.",
        "source": "Unnecessary semicolon."
      },
      {
        "severity": "error",
        "line": 141,
        "column": 2,
        "message": "Unnecessary semicolon.",
        "source": "Unnecessary semicolon."
      },
      {
        "severity": "error",
        "line": 145,
        "column": 2,
        "message": "Unnecessary semicolon.",
        "source": "Unnecessary semicolon."
      },
      {
        "severity": "error",
        "line": 149,
        "column": 2,
        "message": "Unnecessary semicolon.",
        "source": "Unnecessary semicolon."
      },
      {
        "severity": "error",
        "line": 152,
        "column": 12,
        "message": "Wrap the /regexp/ literal in parens to disambiguate the slash operator.",
        "source": "Wrap the /regexp/ literal in parens to disambiguate the slash operator."
      },
      {
        "severity": "error",
        "line": 153,
        "column": 2,
        "message": "Unnecessary semicolon.",
        "source": "Unnecessary semicolon."
      },
      {
        "severity": "error",
        "line": 157,
        "column": 2,
        "message": "Unnecessary semicolon.",
        "source": "Unnecessary semicolon."
      },
      {
        "severity": "error",
        "line": 162,
        "column": 9,
        "message": "Bad line breaking before '||'.",
        "source": "Bad line breaking before '{a}'."
      },
      {
        "severity": "error",
        "line": 163,
        "column": 9,
        "message": "Bad line breaking before '||'.",
        "source": "Bad line breaking before '{a}'."
      },
      {
        "severity": "error",
        "line": 164,
        "column": 9,
        "message": "Bad line breaking before '||'.",
        "source": "Bad line breaking before '{a}'."
      },
      {
        "severity": "error",
        "line": 165,
        "column": 9,
        "message": "Bad line breaking before '||'.",
        "source": "Bad line breaking before '{a}'."
      },
      {
        "severity": "error",
        "line": 166,
        "column": 9,
        "message": "Bad line breaking before '||'.",
        "source": "Bad line breaking before '{a}'."
      },
      {
        "severity": "error",
        "line": 168,
        "column": 2,
        "message": "Unnecessary semicolon.",
        "source": "Unnecessary semicolon."
      },
      {
        "severity": "error",
        "line": 178,
        "column": 2,
        "message": "Unnecessary semicolon.",
        "source": "Unnecessary semicolon."
      },
      {
        "severity": "error",
        "line": 186,
        "column": 2,
        "message": "Unnecessary semicolon.",
        "source": "Unnecessary semicolon."
      },
      {
        "severity": "error",
        "line": 200,
        "column": 2,
        "message": "Unnecessary semicolon.",
        "source": "Unnecessary semicolon."
      },
      {
        "severity": "error",
        "line": 203,
        "column": 39,
        "message": "Use '===' to compare with 'null'.",
        "source": "Use '{a}' to compare with '{b}'."
      },
      {
        "severity": "error",
        "line": 204,
        "column": 2,
        "message": "Unnecessary semicolon.",
        "source": "Unnecessary semicolon."
      },
      {
        "severity": "error",
        "line": 224,
        "column": 53,
        "message": "Unnecessary semicolon.",
        "source": "Unnecessary semicolon."
      },
      {
        "severity": "error",
        "line": 238,
        "column": 6,
        "message": "Unnecessary semicolon.",
        "source": "Unnecessary semicolon."
      },
      {
        "severity": "error",
        "line": 244,
        "column": 6,
        "message": "Unnecessary semicolon.",
        "source": "Unnecessary semicolon."
      },
      {
        "severity": "error",
        "line": 250,
        "column": 6,
        "message": "Unnecessary semicolon.",
        "source": "Unnecessary semicolon."
      },
      {
        "severity": "error",
        "line": 276,
        "column": 6,
        "message": "Unnecessary semicolon.",
        "source": "Unnecessary semicolon."
      },
      {
        "severity": "error",
        "line": 281,
        "column": 6,
        "message": "Unnecessary semicolon.",
        "source": "Unnecessary semicolon."
      },
      {
        "severity": "error",
        "line": 288,
        "column": 6,
        "message": "Unnecessary semicolon.",
        "source": "Unnecessary semicolon."
      },
      {
        "severity": "error",
        "line": 292,
        "column": 6,
        "message": "Unnecessary semicolon.",
        "source": "Unnecessary semicolon."
      },
      {
        "severity": "error",
        "line": 304,
        "column": 38,
        "message": "Use '===' to compare with '0'.",
        "source": "Use '{a}' to compare with '{b}'."
      },
      {
        "severity": "error",
        "line": 307,
        "column": 36,
        "message": "Expected ')' to match '(' from line 307 and instead saw ','.",
        "source": "Expected '{a}' to match '{b}' from line {c} and instead saw '{d}'."
      },
      {
        "severity": "error",
        "line": 307,
        "column": 38,
        "message": "Expected ':' and instead saw '46'.",
        "source": "Expected '{a}' and instead saw '{b}'."
      },
      {
        "severity": "error",
        "line": 307,
        "column": 38,
        "message": "Missing ':' on a case clause.",
        "source": "Missing ':' on a case clause."
      },
      {
        "severity": "error",
        "line": 307,
        "column": 40,
        "message": "Expected an identifier and instead saw ')'.",
        "source": "Expected an identifier and instead saw '{a}'."
      },
      {
        "severity": "error",
        "line": 307,
        "column": 40,
        "message": "Expected an assignment or function call and instead saw an expression.",
        "source": "Expected an assignment or function call and instead saw an expression."
      },
      {
        "severity": "error",
        "line": 307,
        "column": 41,
        "message": "Missing semicolon.",
        "source": "Missing semicolon."
      },
      {
        "severity": "error",
        "line": 307,
        "column": 41,
        "message": "Expected '}' to match '{' from line 296 and instead saw ':'.",
        "source": "Expected '{a}' to match '{b}' from line {c} and instead saw '{d}'."
      },
      {
        "severity": "error",
        "line": 308,
        "column": 17,
        "message": "Expected ')' and instead saw 'return'.",
        "source": "Expected '{a}' and instead saw '{b}'."
      },
      {
        "severity": "error",
        "line": 311,
        "column": 10,
        "message": "Expected an identifier and instead saw ')'.",
        "source": "Expected an identifier and instead saw '{a}'."
      },
      {
        "severity": "error",
        "line": 311,
        "column": 10,
        "message": "Expected an assignment or function call and instead saw an expression.",
        "source": "Expected an assignment or function call and instead saw an expression."
      },
      {
        "severity": "error",
        "line": 319,
        "column": 5,
        "message": "Expected '(end)' and instead saw '}'.",
        "source": "Expected '{a}' and instead saw '{b}'."
      },
      {
        "severity": "error",
        "line": 53,
        "column": 12,
        "message": "'makePredicate' is not defined.",
        "source": "'{a}' is not defined."
      },
      {
        "severity": "error",
        "line": 54,
        "column": 18,
        "message": "'makePredicate' is not defined.",
        "source": "'{a}' is not defined."
      },
      {
        "severity": "error",
        "line": 55,
        "column": 30,
        "message": "'makePredicate' is not defined.",
        "source": "'{a}' is not defined."
      },
      {
        "severity": "error",
        "line": 56,
        "column": 17,
        "message": "'makePredicate' is not defined.",
        "source": "'{a}' is not defined."
      },
      {
        "severity": "error",
        "line": 58,
        "column": 22,
        "message": "'makePredicate' is not defined.",
        "source": "'{a}' is not defined."
      },
      {
        "severity": "error",
        "line": 58,
        "column": 36,
        "message": "'characters' is not defined.",
        "source": "'{a}' is not defined."
      },
      {
        "severity": "error",
        "line": 58,
        "column": 36,
        "message": "Too many errors. (4% scanned).",
        "source": "Too many errors."
      }
    ]
  }
}