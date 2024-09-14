module.exports = {
    user : process.env.NODE_ORACLEDB_USER || "C##solo",
    password : process.env.NODE_ORACLEDB_PASSWORD || "1234",
    connectString : process.env.NODE_ORACLEDB_CONNECTIONSTRING || "211.197.5.218:15000/xe",	
    externalAuth : process.env.NODE_ORACLEDB_EXTERNALAUTH ? true : false
};