export function testForm(validations){
	if(validations){
		return validations.every((validation) => {
			return validation.get('tests').every((test) => {
				return test.get('valid');
			});
		});
	}
	//Form has no validations
	return true;
}