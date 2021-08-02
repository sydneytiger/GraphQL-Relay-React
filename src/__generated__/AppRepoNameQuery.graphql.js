/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type AppRepoNameQueryVariables = {|
  name: string,
  owner: string,
|};
export type AppRepoNameQueryResponse = {|
  +repository: ?{|
    +name: string,
    +languages: ?{|
      +nodes: ?$ReadOnlyArray<?{|
        +name: string
      |}>
    |},
  |}
|};
export type AppRepoNameQuery = {|
  variables: AppRepoNameQueryVariables,
  response: AppRepoNameQueryResponse,
|};
*/


/*
query AppRepoNameQuery(
  $name: String!
  $owner: String!
) {
  repository(name: $name, owner: $owner) {
    name
    languages(first: 10) {
      nodes {
        name
        id
      }
    }
    id
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "name"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "owner"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "name",
    "variableName": "name"
  },
  {
    "kind": "Variable",
    "name": "owner",
    "variableName": "owner"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v3 = [
  {
    "kind": "Literal",
    "name": "first",
    "value": 10
  }
],
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "AppRepoNameQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Repository",
        "kind": "LinkedField",
        "name": "repository",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          {
            "alias": null,
            "args": (v3/*: any*/),
            "concreteType": "LanguageConnection",
            "kind": "LinkedField",
            "name": "languages",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "Language",
                "kind": "LinkedField",
                "name": "nodes",
                "plural": true,
                "selections": [
                  (v2/*: any*/)
                ],
                "storageKey": null
              }
            ],
            "storageKey": "languages(first:10)"
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "AppRepoNameQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Repository",
        "kind": "LinkedField",
        "name": "repository",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          {
            "alias": null,
            "args": (v3/*: any*/),
            "concreteType": "LanguageConnection",
            "kind": "LinkedField",
            "name": "languages",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "Language",
                "kind": "LinkedField",
                "name": "nodes",
                "plural": true,
                "selections": [
                  (v2/*: any*/),
                  (v4/*: any*/)
                ],
                "storageKey": null
              }
            ],
            "storageKey": "languages(first:10)"
          },
          (v4/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "608329cd3e8a9085d2a0318e8dd19dc9",
    "id": null,
    "metadata": {},
    "name": "AppRepoNameQuery",
    "operationKind": "query",
    "text": "query AppRepoNameQuery(\n  $name: String!\n  $owner: String!\n) {\n  repository(name: $name, owner: $owner) {\n    name\n    languages(first: 10) {\n      nodes {\n        name\n        id\n      }\n    }\n    id\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'f086c754b7e9c486f111ba90dd017e37';

module.exports = node;
