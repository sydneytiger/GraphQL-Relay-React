/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type AppRepoNameQueryVariables = {||};
export type AppRepoNameQueryResponse = {|
  +repository: ?{|
    +name: string
  |}
|};
export type AppRepoNameQuery = {|
  variables: AppRepoNameQueryVariables,
  response: AppRepoNameQueryResponse,
|};
*/


/*
query AppRepoNameQuery {
  repository(name: "todo-app", owner: "sydneytiger") {
    name
    id
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "Literal",
    "name": "name",
    "value": "todo-app"
  },
  {
    "kind": "Literal",
    "name": "owner",
    "value": "sydneytiger"
  }
],
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "AppRepoNameQuery",
    "selections": [
      {
        "alias": null,
        "args": (v0/*: any*/),
        "concreteType": "Repository",
        "kind": "LinkedField",
        "name": "repository",
        "plural": false,
        "selections": [
          (v1/*: any*/)
        ],
        "storageKey": "repository(name:\"todo-app\",owner:\"sydneytiger\")"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "AppRepoNameQuery",
    "selections": [
      {
        "alias": null,
        "args": (v0/*: any*/),
        "concreteType": "Repository",
        "kind": "LinkedField",
        "name": "repository",
        "plural": false,
        "selections": [
          (v1/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "id",
            "storageKey": null
          }
        ],
        "storageKey": "repository(name:\"todo-app\",owner:\"sydneytiger\")"
      }
    ]
  },
  "params": {
    "cacheID": "0220562626e30760e2648eada85c13da",
    "id": null,
    "metadata": {},
    "name": "AppRepoNameQuery",
    "operationKind": "query",
    "text": "query AppRepoNameQuery {\n  repository(name: \"todo-app\", owner: \"sydneytiger\") {\n    name\n    id\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'fb84c4b08d52ef3089ba397d6bfd6bf0';

module.exports = node;
