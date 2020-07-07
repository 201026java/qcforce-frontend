// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

/* Sync Service: http://ec2-3-23-215-133.us-east-2.compute.amazonaws.com:8085;
   * Training Service: 'http://ec2-18-219-219-28.us-east-2.compute.amazonaws.com:8086';
   * Survey Service: http://ec2-3-134-110-211.us-east-2.compute.amazonaws.com:8087;
   */

export const environment = {
  production: false,
  // =============Angelo's URLS==============================
  getBatchUrl: 'http://ec2-3-134-110-211.us-east-2.compute.amazonaws.com:8087/batch/list',
  getWeeksUrl: 'http://ec2-3-134-110-211.us-east-2.compute.amazonaws.com:8087/batch/weeks',
  getBatchAllWeeks: 'http://ec2-3-134-110-211.us-east-2.compute.amazonaws.com:8087/batch/chartdatabatch/name/',
  getOneBatchOneWeek: 'http://ec2-3-134-110-211.us-east-2.compute.amazonaws.com:8087/batch/chartdatabatch/',
  getAvgWeekBatch: 'http://ec2-3-134-110-211.us-east-2.compute.amazonaws.com:8087/batch/chartdatabatch/all',
  getAnswersUrl: 'http://localhost:3000/answers',

  // =============Kiryl's URLS==============================
  
  getBatchListUrl: 'http://ec2-18-219-219-28.us-east-2.compute.amazonaws.com:8086/batch/', // 'http://localhost:3100/batches',
  getSurveysByBatchIdUrl: 'http://localhost:3001/surveys',
  getBatchByBatchName: 'http://ec2-3-134-110-211.us-east-2.compute.amazonaws.com:8087',
  getAssociateByBatchName: 'http://ec2-18-219-219-28.us-east-2.compute.amazonaws.com:8086/associate/batch-name/'


};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
