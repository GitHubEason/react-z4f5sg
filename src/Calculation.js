let Australia = {
    2021:[[180000,0.45,[0,5092,24375,22200]],[120000,0.35,[0,5092,24375]],[45000,0.327,[0,5092]],[18200,0,[0]]],
    taxBracketAU21: [51667,29467,5093],
}












const Calculation = (income,country,year) => {
    let taxableIncome = 0;
    let taxBracket = [];
    country = Australia;
    year = 2021
    if(income > country[year][0][0]+1){
        taxableIncome = (income - country[year][0][0])*country[year][0][1] + country.taxBracketAU21[0];
        taxBracket = country[year][0][2]
        taxBracket.push((income - country[year][0][0])*country[year][0][1]);
    } else if (income > 120001){
        taxableIncome = (income - country[year][1][0])*country[year][1][1] + country.taxBracketAU21[1];
        taxBracket = country[year][1][2]
        taxBracket.push((income - country[year][1][0])*country[year][1][1]);
    } else if (income > 45001){
        taxableIncome = (income - country[year][2][0])*country[year][2][1] + country.taxBracketAU21[2];
        taxBracket = country[year][2][2]
        taxBracket.push((income - country[year][2][0])*country[year][2][1]);
    } else if (income > 18201){
        taxableIncome = (income - country[year][3][0])*country[year][3][1];
        taxBracket = country[year][3][2]
        taxBracket.push((income - country[year][3][0])*country[year][3][1]);
    } else {
        taxableIncome = 0;
        taxBracket = [0];
    }
    return {taxableIncome, taxBracket};
}
 
export default Calculation;