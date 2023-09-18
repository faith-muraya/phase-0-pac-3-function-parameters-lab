function introduction(name){
    return `Hi, my name is ${name}.`;
}

function introductionWithLanguage(name, Javascript){
    return `Hi, my name is ${name} and I am learning to program in ${Javascript}.`;
  }

  function introductionWithLanguageOptional(name, Javascript){
    return `Hi, my name is ${name} and I am learning to program in ${Javascript || "JavaScript"}.`;
  }