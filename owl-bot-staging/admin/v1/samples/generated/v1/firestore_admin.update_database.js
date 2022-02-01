// Copyright 2021 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.


'use strict';

function main(database) {
  // [START firestore_v1_generated_FirestoreAdmin_UpdateDatabase_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The database to update.
   */
  // const database = {}
  /**
   *  The list of fields to be updated.
   */
  // const updateMask = {}

  // Imports the Admin library
  const {FirestoreAdminClient} = require('@google-cloud/firestore-admin').v1;

  // Instantiates a client
  const adminClient = new FirestoreAdminClient();

  async function callUpdateDatabase() {
    // Construct request
    const request = {
      database,
    };

    // Run request
    const [operation] = await adminClient.updateDatabase(request);
    const [response] = await operation.promise();
    console.log(response);
  }

  callUpdateDatabase();
  // [END firestore_v1_generated_FirestoreAdmin_UpdateDatabase_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
