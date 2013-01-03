__report = {
  "info": {
    "file": "/tmp/plato/marionette/src/marionette.approuter.js",
    "fileShort": "approuter.js",
    "fileSafe": "approuter_js",
    "link": "files/approuter_js"
  },
  "complexity": {
    "aggregate": {
      "line": 19,
      "complexity": {
        "sloc": {
          "physical": 47,
          "logical": 31
        },
        "cyclomatic": 5,
        "halstead": {
          "operators": {
            "distinct": 17,
            "total": 78,
            "identifiers": [
              "__stripped__"
            ]
          },
          "operands": {
            "distinct": 41,
            "total": 102,
            "identifiers": [
              "__stripped__"
            ]
          },
          "length": 180,
          "vocabulary": 58,
          "difficulty": 21.146341463414632,
          "volume": 1054.436579122963,
          "effort": 22297.475953648995,
          "bugs": 0.3514788597076543,
          "time": 1238.7486640916109
        }
      }
    },
    "functions": [
      {
        "name": "constructor",
        "line": 21,
        "complexity": {
          "sloc": {
            "physical": 11,
            "logical": 6
          },
          "cyclomatic": 2,
          "halstead": {
            "operators": {
              "distinct": 5,
              "total": 22,
              "identifiers": [
                "__stripped__"
              ]
            },
            "operands": {
              "distinct": 17,
              "total": 29,
              "identifiers": [
                "__stripped__"
              ]
            },
            "length": 51,
            "vocabulary": 22,
            "difficulty": 4.264705882352941,
            "volume": 227.43101255050217,
            "effort": 969.9263770536122,
            "bugs": 0.07581033751683405,
            "time": 53.88479872520068
          }
        }
      },
      {
        "name": "processAppRoutes",
        "line": 36,
        "complexity": {
          "sloc": {
            "physical": 29,
            "logical": 22
          },
          "cyclomatic": 4,
          "halstead": {
            "operators": {
              "distinct": 14,
              "total": 46,
              "identifiers": [
                "__stripped__"
              ]
            },
            "operands": {
              "distinct": 25,
              "total": 63,
              "identifiers": [
                "__stripped__"
              ]
            },
            "length": 109,
            "vocabulary": 39,
            "difficulty": 17.64,
            "volume": 576.1088418559851,
            "effort": 10162.559970339578,
            "bugs": 0.1920362806186617,
            "time": 564.5866650188655
          }
        }
      }
    ],
    "maintainability": 98.49888377834546,
    "module": "approuter.js"
  },
  "jshint": {
    "messages": [
      {
        "severity": "error",
        "line": 22,
        "column": 5,
        "message": "Missing \"use strict\" statement.",
        "source": "Missing \"use strict\" statement."
      },
      {
        "severity": "error",
        "line": 37,
        "column": 5,
        "message": "Missing \"use strict\" statement.",
        "source": "Missing \"use strict\" statement."
      },
      {
        "severity": "error",
        "line": 19,
        "column": 1,
        "message": "'Marionette' is not defined.",
        "source": "'{a}' is not defined."
      },
      {
        "severity": "error",
        "line": 19,
        "column": 24,
        "message": "'Backbone' is not defined.",
        "source": "'{a}' is not defined."
      },
      {
        "severity": "error",
        "line": 23,
        "column": 5,
        "message": "'Backbone' is not defined.",
        "source": "'{a}' is not defined."
      },
      {
        "severity": "error",
        "line": 28,
        "column": 24,
        "message": "'Marionette' is not defined.",
        "source": "'{a}' is not defined."
      },
      {
        "severity": "error",
        "line": 61,
        "column": 16,
        "message": "'_' is not defined.",
        "source": "'{a}' is not defined."
      },
      {
        "severity": "warning",
        "line": [
          19,
          28
        ],
        "column": 0,
        "message": "Implied global 'Marionette'",
        "source": "jshint.implied-globals"
      },
      {
        "severity": "warning",
        "line": [
          19,
          23
        ],
        "column": 0,
        "message": "Implied global 'Backbone'",
        "source": "jshint.implied-globals"
      },
      {
        "severity": "warning",
        "line": [
          61
        ],
        "column": 0,
        "message": "Implied global '_'",
        "source": "jshint.implied-globals"
      }
    ]
  }
}