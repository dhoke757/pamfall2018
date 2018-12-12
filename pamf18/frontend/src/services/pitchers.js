// import the pitchers service
import { pitchers } from "@/services/feathers";

/**
 * getPitchers(query)
 * 
 * This function will query the database and retrieve
 * a list of pitchers. For details on the syntax of
 * the `query` parameter, see the feathersjs documentation
 * for the `find()` function:
 * https://docs.feathersjs.com/api/databases/querying.html
 * 
 * @param  {object} query Any additional standard feathers params
 * @return {object}       A paginated feathers query result
 */
export const getPitchers = async query => {
  // make sure the query parameter has a default value
  query = query || {};
  // execute and return the query results
  return await pitchers.find(query);
};

