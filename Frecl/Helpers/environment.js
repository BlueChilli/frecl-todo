import ENVIRONMENTS from "../Constants/ENVIRONMENTS";

function _getEnviroment(){
  return process.env.NODE_ENV;
}

export function isDevelopment(){
  return _getEnviroment() === ENVIRONMENTS.get('DEVELOPMENT');
}

export function isProduction(){
  return _getEnviroment() === ENVIRONMENTS.get('PRODUCTION');
}

export function getConstant(constant){
  return constant.get(_getEnviroment());
}
