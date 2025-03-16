const fizzBuzz = Array.from({ length: 100 }, (_, i) => i + 1)
  .map(n => {
    const fizz = n % 3 === 0;
    const buzz = n % 5 === 0;
    return `${fizz ? 'Fizz' : ''}${buzz ? 'Buzz' : ''}` || n;
  });


const AddRules = numbers => 
  numbers.map(n => {
    const aho = n % 3 === 0 || n.toString().includes('3');
    const quzz = n % 7 === 0;
    const kass = n % 11 === 0;
    
    const result = [
      aho ? 'Aho' : '',
      quzz ? 'Quzz' : '',
      kass ? 'Kass' : ''
    ].join('');

    return result || n;
  });

const addedFizzBuzz = AddRules(fizzBuzz);

console.log(addedFizzBuzz);