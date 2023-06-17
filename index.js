const path = require("path");
module.exports = {
    "env": {
        "browser": true,
        "es6": true,
        "node": true
    },
    "settings": {
        "import/resolver": {
            "typescript": true,
            "node": true
        }
    },
    "extends": [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:@typescript-eslint/recommended-requiring-type-checking",
        "plugin:@typescript-eslint/strict",
        "plugin:import/recommended",
        "plugin:import/typescript"
    ],
    "globals": {},
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": 2018,
        "sourceType": "module",
        "ecmaFeatures": {
            "modules": true
        },
        "project": path.join(__dirname, "../../tsconfig.json")
    },
    "plugins": [
        "@typescript-eslint"
    ],
    "rules": {
        /*
         * Possible Problems
         * https://eslint.org/docs/latest/rules/#possible-problems
         */
        "array-callback-return": "error",
        "for-direction": "off",
        "no-await-in-loop": "error",
        "no-constant-binary-expression": "error",
        "no-constructor-return": "error",
        "no-control-regex": "off",
        "no-debugger": "off",
        "no-duplicate-imports": [
            "error",
            {
                "includeExports": true
            }
        ],
        "no-inner-declarations": [
            "error",
            "both"
        ],
        "no-irregular-whitespace": "off",
        "no-new-native-nonconstructor": "error",
        "no-promise-executor-return": "error",
        "no-self-compare": "error",
        "no-template-curly-in-string": "off",
        "no-unmodified-loop-condition": "error",
        "no-unreachable-loop": "error",
        "no-unused-private-class-members": "error",
        /*
         * Handled by the @typescript-eslint/no-use-before-define rule
         */
        "no-use-before-define": "off",
        "no-useless-backreference": "off",
        "require-atomic-updates": "error",
        /*
         * Suggestions
         * https://eslint.org/docs/latest/rules/#suggestions
         */
        "accessor-pairs": "off",
        "arrow-body-style": [
            "error",
            "as-needed",
            {
                "requireReturnForObjectLiteral": false
            }
        ],
        "block-scoped-var": "off",
        /*
         * Handled by the @typescript-eslint/naming-convention rule
         */
        "camelcase": "off",
        "capitalized-comments": "off",
        "class-methods-use-this": "off",
        "complexity": [
            "error",
            {
                "max": 12
            }
        ],
        "consistent-return": "off",
        "consistent-this": "off",
        "curly": "error",
        "default-case": "error",
        "default-case-last": "error",
        /*
         * Handled by the @typescript-eslint/default-param-last rule
         */
        "default-param-last": "off",
        "dot-notation": "off",
        "eqeqeq": "error",
        "func-name-matching": [
            "error",
            {
                "considerPropertyDescriptor": true
            }
        ],
        "func-names": [
            "error",
            "as-needed",
            {
                "generators": "as-needed"
            }
        ],
        "func-style": "off",
        "grouped-accessor-pairs": "error",
        "guard-for-in": "off",
        "id-denylist": "off",
        "id-length": [
            "error",
            {
                "min": 2,
                "max": 30,
                "properties": "always",
                "exceptions": [
                    "x",
                    "y",
                    "z",
                    "a",
                    "b",
                    "i",
                    "j",
                    "k"
                ]
            }
        ],
        "id-match": "off",
        /*
         * Handled by the @typescript-eslint/init-declarations rule
         */
        "init-declarations": "off",
        "logical-assignment-operators": [
            "error",
            "always",
            {
                "enforceForIfStatements": true
            }
        ],
        "max-classes-per-file": [
            "error",
            {
                "max": 1,
                "ignoreExpressions": true
            }
        ],
        "max-depth": [
            "error",
            {
                "max": 4
            }
        ],
        "max-lines": [
            "error",
            {
                "max": 500,
                "skipBlankLines": true,
                "skipComments": true
            }
        ],
        "max-lines-per-function": [
            "error",
            {
                "max": 50,
                "skipBlankLines": true,
                "skipComments": true,
                "IIFEs": false
            }
        ],
        "max-nested-callbacks": [
            "error",
            3
        ],
        "max-params": [
            "error",
            5
        ],
        "max-statements": [
            "error",
            20
        ],
        "multiline-comment-style": [
            "error",
            "starred-block"
        ],
        "new-cap": [
            "error",
            {
                "properties": true
            }
        ],
        "no-alert": "error",
        /*
         * Handled by the @typescript-eslint/no-array-constructor rule
         */
        "no-array-constructor": "off",
        /*
         * Handled by the @typescript-eslint/no-dupe-class-members rule
         */
        "no-dupe-class-members": "off",
        "no-bitwise": "error",
        "no-caller": "error",
        "no-confusing-arrow": "off",
        "no-console": "off",
        "no-continue": "off",
        "no-div-regex": "off",
        "no-else-return": "error",
        /*
         * Handled by the @typescript-eslint/no-empty-function rule
         */
        "no-empty-function": "off",
        /*
         * Handled by the @typescript-eslint/no-extra-semi rule
         */
        "no-extra-semi": "off",
        "no-empty-static-block": "error",
        "no-eq-null": "error",
        "no-eval": "off",
        "no-extend-native": "error",
        "no-extra-bind": "error",
        "no-extra-boolean-cast": "error",
        "no-extra-label": "error",
        "no-floating-decimal": "error",
        "no-global-assign": [
            "error",
            {
                "exceptions": [
                    "window"
                ]
            }
        ],
        "no-implicit-coercion": "error",
        "no-implicit-globals": [
            "error",
            {
                "lexicalBindings": false
            }
        ],
        /*
         * Handled by the @typescript-eslint/no-implied-eval rule
         */
        "no-implied-eval": "off",
        "no-inline-comments": "error",
        /*
         * Handled by the @typescript-eslint/no-invalid-this rule
         */
        "no-invalid-this": "off",
        "no-iterator": "error",
        "no-label-var": "error",
        "no-labels": "error",
        "no-lone-blocks": "error",
        /*
         * Handled by the @typescript-eslint/no-magic-numbers rule
         */
        "no-magic-numbers": "off",
        "no-mixed-operators": "error",
        /*
         * Handled by the @typescript-eslint/no-loop-func rule
         */
        "no-loop-func": "off",
        /*
         * Handled by the @typescript-eslint/no-loss-of-precision rule
         */
        "no-loss-of-precision": "off",
        /*
         * Handled by the @typescript-eslint/no-redeclare rule
         */
        "no-redeclare": "off",
        /*
         * Handled by the @typescript-eslint/no-restricted-imports rule
         */
        "no-restricted-imports": "off",
        "no-lonely-if": "off",
        "no-multi-assign": "off",
        "no-multi-str": "off",
        "no-negated-condition": "error",
        "no-nested-ternary": "off",
        "no-new": "error",
        "no-new-func": "off",
        "no-new-object": "error",
        "no-new-wrappers": "error",
        "no-octal-escape": "error",
        "no-param-reassign": "error",
        "no-plusplus": "off",
        "no-proto": "error",
        "no-regex-spaces": "error",
        "no-restricted-exports": "off",
        "no-restricted-globals": "off",
        "no-restricted-properties": "off",
        "no-restricted-syntax": "off",
        "no-return-assign": "error",
        /*
         * Handled by the @typescript-eslint/no-return-await rule
         */
        "no-return-await": "off",
        "no-script-url": "off",
        "no-sequences": "error",
        /*
         * Handled by the @typescript-eslint/no-shadow rule
         */
        "no-shadow": "off",
        "no-ternary": "off",
        /*
         * Handled by the @typescript-eslint/no-throw-literal rule
         */
        "no-throw-literal": "off",
        "no-undef-init": "error",
        "no-undefined": "error",
        "no-underscore-dangle": "off",
        "no-unneeded-ternary": "error",
        /*
         * Handled by the @typescript-eslint/no-unused-expressions rule
         */
        "no-unused-expressions": "off",
        /*
         * Handled by the @typescript-eslint/no-unused-vars rule
         */
        "no-unused-vars": "off",
        "no-useless-call": "error",
        "no-useless-computed-key": "off",
        "no-useless-concat": "error",
        /*
         * Handled by the @typescript-eslint/no-useless-constructor rule
         */
        "no-useless-constructor": "off",
        "no-useless-rename": "error",
        "no-useless-return": "error",
        "no-var": "error",
        "no-void": "error",
        "no-warning-comments": "off",
        "object-shorthand": "off",
        "one-var": "off",
        "one-var-declaration-per-line": "off",
        "operator-assignment": "off",
        "prefer-arrow-callback": "error",
        "prefer-const": "error",
        "prefer-destructuring": "off",
        "prefer-exponentiation-operator": "off",
        "prefer-named-capture-group": "off",
        "prefer-numeric-literals": "error",
        "prefer-object-has-own": "off",
        "prefer-object-spread": "off",
        "prefer-promise-reject-errors": "error",
        "prefer-regex-literals": "off",
        "prefer-rest-params": "off",
        "prefer-spread": "off",
        "prefer-template": "error",
        "quote-props": [
            "error",
            "consistent-as-needed"
        ],
        "radix": "error",
        /*
         * Handled by the @typescript-eslint/require-await rule
         */
        "require-await": "off",
        "require-unicode-regexp": "off",
        "sort-imports": [
            "error",
            {
                "ignoreCase": true,
                "ignoreDeclarationSort": true,
                "ignoreMemberSort": true,
                "memberSyntaxSortOrder": [
                    "none",
                    "all",
                    "multiple",
                    "single"
                ],
                "allowSeparatedGroups": false
            }
        ],
        "sort-keys": "off",
        "sort-vars": "off",
        "spaced-comment": [
            "error",
            "always",
            {
                "exceptions": [
                    "/",
                    "*",
                    "@ts-ignore"
                ]
            }
        ],
        "strict": [
            "error",
            "global"
        ],
        "symbol-description": "error",
        "vars-on-top": "off",
        "yoda": "off",
        /*
         * Layout & Formatting
         * https://eslint.org/docs/latest/rules/#layout--formatting
         */
        "array-bracket-newline": [
            "error",
            "consistent"
        ],
        "array-bracket-spacing": [
            "error",
            "never"
        ],
        "array-element-newline": [
            "error",
            "consistent"
        ],
        "arrow-parens": [
            "error",
            "as-needed"
        ],
        "arrow-spacing": "error",
        /*
         * Handled by the @typescript-eslint/block-spacing rule
         */
        "block-spacing": "off",
        /*
         * Handled by the @typescript-eslint/brace-style rule
         */
        "brace-style": "off",
        /*
         * Handled by the @typescript-eslint/comma-dangle rule
         */
        "comma-dangle": "off",
        /*
         * Handled by the @typescript-eslint/comma-spacing rule
         */
        "comma-spacing": "off",
        "comma-style": [
            "error",
            "last"
        ],
        "computed-property-spacing": [
            "error",
            "never",
            {
                "enforceForClassMembers": true
            }
        ],
        "dot-location": [
            "error",
            "property"
        ],
        "eol-last": [
            "error",
            "always"
        ],
        /*
         * Handled by the @typescript-eslint/func-call-spacing rule
         */
        "func-call-spacing": "off",
        "function-call-argument-newline": [
            "error",
            "consistent"
        ],
        "function-paren-newline": [
            "error",
            "never"
        ],
        "generator-star-spacing": [
            "error",
            {
                "before": true,
                "after": false
            }
        ],
        "implicit-arrow-linebreak": [
            "error",
            "beside"
        ],
        /*
         * Should be disabled to prevent unnecessary errors
         * https://github.com/typescript-eslint/typescript-eslint/issues/1824
         * Original value: ["error", 4]
         */
        "indent": "off",
        "jsx-quotes": [
            "error",
            "prefer-double"
        ],
        /*
         * Handled by the @typescript-eslint/key-spacing rule
         */
        "key-spacing": "off",
        /*
         * Handled by the @typescript-eslint/keyword-spacing rule
         */
        "keyword-spacing": "off",
        "line-comment-position": [
            "error",
            "above"
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        /*
         * Handled by the @typescript-eslint/lines-around-comment rule
         */
        "lines-around-comment": "off",
        /*
         * Handled by the @typescript-eslint/lines-between-class-members rule
         */
        "lines-between-class-members": "off",
        "max-len": [
            "error",
            {
                "code": 120,
                "tabWidth": 4,
                "comments": 120,
                "ignoreUrls": false,
                "ignoreTemplateLiterals": false
            }
        ],
        "max-statements-per-line": [
            "error",
            {
                "max": 1
            }
        ],
        "multiline-ternary": [
            "error",
            "always-multiline"
        ],
        "new-parens": "error",
        "newline-per-chained-call": [
            "error",
            {
                "ignoreChainWithDepth": 4
            }
        ],
        /*
         * Handled by the @typescript-eslint/no-extra-parens rule
         */
        "no-extra-parens": "off",
        "no-multi-spaces": "error",
        "no-multiple-empty-lines": [
            "error",
            {
                "max": 1,
                "maxEOF": 1,
                "maxBOF": 0
            }
        ],
        "no-tabs": "error",
        "no-trailing-spaces": [
            "error",
            {
                "skipBlankLines": true,
                "ignoreComments": true
            }
        ],
        "no-whitespace-before-property": "error",
        "nonblock-statement-body-position": [
            "error",
            "beside"
        ],
        "object-curly-newline": [
            "error",
            {
                "consistent": true
            }
        ],
        /*
         * Handled by the @typescript-eslint/object-curly-spacing rule
         */
        "object-curly-spacing": "off",
        "object-property-newline": "off",
        "operator-linebreak": [
            "error",
            "before"
        ],
        "padded-blocks": [
            "error",
            "never",
            {
                "allowSingleLineBlocks": false
            }
        ],
        /*
         * Handled by the @typescript-eslint/padding-line-between-statements rule
         */
        "padding-line-between-statements": "off",
        /*
         * Handled by the @typescript-eslint/quotes rule
         */
        "quotes": "off",
        "rest-spread-spacing": [
            "error",
            "never"
        ],
        /*
         * Handled by the @typescript-eslint/quotes rule
         */
        "semi": "off",
        "semi-spacing": "error",
        "semi-style": "error",
        /*
         * Handled by the @typescript-eslint/space-before-blocks rule
         */
        "space-before-blocks": "off",
        /*
         * Handled by the @typescript-eslint/space-before-function-paren rule
         */
        "space-before-function-paren": "off",
        "space-in-parens": [
            "error",
            "never"
        ],
        /*
         * Handled by the @typescript-eslint/space-infix-ops rule
         */
        "space-infix-ops": "off",
        "space-unary-ops": "error",
        "switch-colon-spacing": "error",
        "template-curly-spacing": "error",
        "template-tag-spacing": "error",
        "unicode-bom": "off",
        "wrap-iife": [
            "error",
            "inside"
        ],
        "wrap-regex": "off",
        "yield-star-spacing": [
            "error",
            "before"
        ],
        /*
         * TypeScript
         * https://typescript-eslint.io/rules/
         */
        "@typescript-eslint/ban-ts-comment": [
            "error",
            {
                "ts-expect-error": "allow-with-description",
                "ts-ignore": "allow-with-description",
                "ts-nocheck": "allow-with-description",
                "ts-check": "allow-with-description",
                "minimumDescriptionLength": 10
            }
        ],
        "@typescript-eslint/ban-tslint-comment": "off",
        "@typescript-eslint/class-literal-property-style": [
            "error",
            "fields"
        ],
        "@typescript-eslint/consistent-generic-constructors": [
            "error",
            "constructor"
        ],
        "@typescript-eslint/consistent-indexed-object-style": [
            "error",
            "record"
        ],
        "@typescript-eslint/consistent-type-assertions": [
            "error",
            {
                "assertionStyle": "as",
                "objectLiteralTypeAssertions": "allow-as-parameter"
            }
        ],
        "@typescript-eslint/consistent-type-definitions": [
            "error",
            "interface"
        ],
        "@typescript-eslint/consistent-type-exports": "off",
        "@typescript-eslint/consistent-type-imports": "off",
        "@typescript-eslint/explicit-function-return-type": "error",
        "@typescript-eslint/explicit-member-accessibility": [
            "error",
            {
                "accessibility": "explicit"
            }
        ],
        "@typescript-eslint/explicit-module-boundary-types": "off",
        "@typescript-eslint/member-ordering": [
            "error",
            {
                "default": [
                    "signature",
                    "field",
                    "constructor",
                    "method"
                ]
            }
        ],
        "@typescript-eslint/method-signature-style": [
            "error",
            "method"
        ],
        "@typescript-eslint/naming-convention": [
            "error",
            {
                "selector": [
                    "default",
                    "parameter",
                    "memberLike"
                ],
                "leadingUnderscore": "allow",
                "format": [
                    "camelCase"
                ]
            },
            {
                "selector": "variable",
                "modifiers": [
                    "global",
                    "const"
                ],
                "leadingUnderscore": "allow",
                "format": [
                    "camelCase",
                    "PascalCase",
                    "UPPER_CASE"
                ]
            },
            {
                "selector": "variable",
                "modifiers": [
                    "const"
                ],
                "leadingUnderscore": "allow",
                "format": [
                    "camelCase",
                    "PascalCase"
                ]
            },
            {
                "selector": "classProperty",
                "modifiers": [
                    "static"
                ],
                "format": [
                    "UPPER_CASE"
                ]
            },
            {
                "selector": "typeLike",
                "leadingUnderscore": "allow",
                "format": [
                    "PascalCase"
                ]
            },
            {
                "selector": "enumMember",
                "format": [
                    "UPPER_CASE"
                ]
            }
        ],
        "@typescript-eslint/no-unsafe-enum-comparison": "off",
        "@typescript-eslint/no-confusing-non-null-assertion": "error",
        "@typescript-eslint/no-confusing-void-expression": [
            "error",
            {
                "ignoreArrowShorthand": true
            }
        ],
        "@typescript-eslint/no-duplicate-type-constituents": "error",
        "@typescript-eslint/no-dynamic-delete": "off",
        "@typescript-eslint/no-empty-interface": "off",
        "@typescript-eslint/no-explicit-any": [
            "error",
            {
                "fixToUnknown": true,
                "ignoreRestArgs": true
            }
        ],
        "@typescript-eslint/no-extraneous-class": "error",
        "@typescript-eslint/no-floating-promises": "off",
        "@typescript-eslint/no-import-type-side-effects": "off",
        "@typescript-eslint/no-misused-promises": [
            "error",
            {
                "checksConditionals": true,
                "checksSpreads": false,
                "checksVoidReturn": {
                    "arguments": false,
                    "attributes": false
                }
            }
        ],
        "@typescript-eslint/restrict-template-expressions": "off",
        "@typescript-eslint/no-redundant-type-constituents": "error",
        "@typescript-eslint/no-require-imports": "error",
        "@typescript-eslint/no-type-alias": "off",
        "@typescript-eslint/no-unnecessary-boolean-literal-compare": [
            "error",
            {
                "allowComparingNullableBooleansToTrue": true,
                "allowComparingNullableBooleansToFalse": true
            }
        ],
        "@typescript-eslint/no-unnecessary-condition": [
            "error",
            {
                "allowConstantLoopConditions": true,
                "allowRuleToRunWithoutStrictNullChecksIKnowWhatIAmDoing": false
            }
        ],
        "@typescript-eslint/prefer-nullish-coalescing": [
            "error",
            {
                "ignoreConditionalTests": false,
                "ignoreTernaryTests": false,
                "ignoreMixedLogicalExpressions": false,
                "allowRuleToRunWithoutStrictNullChecksIKnowWhatIAmDoing": false
            }
        ],
        "@typescript-eslint/no-unnecessary-qualifier": "error",
        "@typescript-eslint/no-useless-empty-export": "error",
        "@typescript-eslint/parameter-properties": "off",
        "@typescript-eslint/prefer-enum-initializers": "error",
        "@typescript-eslint/prefer-includes": "off",
        "@typescript-eslint/prefer-readonly": "error",
        "@typescript-eslint/prefer-readonly-parameter-types": "off",
        "@typescript-eslint/prefer-regexp-exec": "error",
        "@typescript-eslint/prefer-return-this-type": "error",
        "@typescript-eslint/promise-function-async": "off",
        "@typescript-eslint/require-array-sort-compare": "error",
        "@typescript-eslint/sort-type-constituents": "error",
        "@typescript-eslint/strict-boolean-expressions": "error",
        "@typescript-eslint/switch-exhaustiveness-check": "error",
        "@typescript-eslint/no-inferrable-types": [
            "error",
            {
                "ignoreParameters": true,
                "ignoreProperties": true
            }
        ],
        "@typescript-eslint/typedef": [
            "error",
            {
                "arrayDestructuring": false,
                "arrowParameter": false,
                "memberVariableDeclaration": true,
                "objectDestructuring": false,
                "parameter": true,
                "propertyDeclaration": true,
                "variableDeclaration": false,
                "variableDeclarationIgnoreFunction": true
            }
        ],
        "@typescript-eslint/unified-signatures": "off",
        /*
         * TypeScript: Extension Rules
         * https://typescript-eslint.io/rules/
         */
        "@typescript-eslint/default-param-last": "error",
        "@typescript-eslint/dot-notation": "off",
        "@typescript-eslint/init-declarations": [
            "error",
            "always"
        ],
        "@typescript-eslint/no-array-constructor": "error",
        "@typescript-eslint/no-dupe-class-members": "error",
        "@typescript-eslint/no-empty-function": "off",
        "@typescript-eslint/no-extra-semi": "error",
        "@typescript-eslint/no-implied-eval": "off",
        "@typescript-eslint/no-invalid-this": "off",
        "@typescript-eslint/no-loop-func": "error",
        "@typescript-eslint/no-loss-of-precision": "error",
        "@typescript-eslint/no-magic-numbers": "off",
        "@typescript-eslint/no-redeclare": "error",
        "@typescript-eslint/no-restricted-imports": "off",
        "@typescript-eslint/no-shadow": "off",
        "@typescript-eslint/no-throw-literal": "error",
        "@typescript-eslint/no-unused-expressions": [
            "error",
            {
                "allowShortCircuit": true,
                "allowTernary": true
            }
        ],
        "@typescript-eslint/no-unused-vars": "error",
        "@typescript-eslint/no-use-before-define": [
            "error",
            {
                "enums": true,
                "typedefs": true,
                "ignoreTypeReferences": false
            }
        ],
        "@typescript-eslint/no-useless-constructor": "error",
        "@typescript-eslint/require-await": "error",
        "@typescript-eslint/return-await": "error",
        /*
         * TypeScript: Formatting Rules
         * https://typescript-eslint.io/rules/
         */
        "@typescript-eslint/block-spacing": "error",
        "@typescript-eslint/brace-style": [
            "error",
            "1tbs",
            {
                "allowSingleLine": true
            }
        ],
        "@typescript-eslint/comma-dangle": [
            "error",
            "never"
        ],
        "@typescript-eslint/comma-spacing": [
            "error",
            {
                "before": false,
                "after": true
            }
        ],
        "@typescript-eslint/func-call-spacing": [
            "error",
            "never"
        ],
        "@typescript-eslint/key-spacing": [
            "error",
            {
                "mode": "strict"
            }
        ],
        "@typescript-eslint/keyword-spacing": "error",
        "@typescript-eslint/lines-around-comment": "off",
        "@typescript-eslint/lines-between-class-members": [
            "error",
            "always",
            {
                "exceptAfterSingleLine": true,
                "exceptAfterOverload": true
            }
        ],
        "@typescript-eslint/member-delimiter-style": [
            "error",
            {
                "multiline": {
                    "delimiter": "semi",
                    "requireLast": true
                },
                "singleline": {
                    "delimiter": "semi",
                    "requireLast": false
                },
                "multilineDetection": "brackets"
            }
        ],
        "@typescript-eslint/no-extra-parens": "off",
        "@typescript-eslint/object-curly-spacing": [
            "error",
            "never"
        ],
        "@typescript-eslint/padding-line-between-statements": "off",
        "@typescript-eslint/quotes": [
            "error",
            "double",
            {
                "allowTemplateLiterals": true
            }
        ],
        "@typescript-eslint/semi": [
            "error",
            "always"
        ],
        "@typescript-eslint/space-before-blocks": "error",
        "@typescript-eslint/space-before-function-paren": [
            "error",
            "never"
        ],
        "@typescript-eslint/space-infix-ops": "error",
        "@typescript-eslint/type-annotation-spacing": "error"
    }
}
