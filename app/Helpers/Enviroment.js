export function getEnvironment(){
	return process.env.NODE_ENV;
}

export function isDevelop(){
	return getEnvironment() === 'development';
}

export function isProduction(){
	return getEnvironment() === 'production';
}

