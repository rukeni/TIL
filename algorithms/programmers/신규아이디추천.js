function solution(new_id) {
  // 1. 1단계 소문자로 치환
  // 2. 2단계 소문자, 숫자, 빼기, 밑줄, 마침표제외한 모든 문자 제거
  // 3. 3단계 마침표 두번 이상일때 마침표 하나로 치환
  const step2Regex = /[^0-9a-z-_\.]/g;
  const step3Regex = /[\.]{2,}/g
  
  let lowerCaseId = new_id.toLowerCase().replace(step2Regex, '').replace(step3Regex, '.');
  
  // 4. 4단계 처음과 끝 마침표 제거
  while(true) {
      if(lowerCaseId[0] === '.') {
          lowerCaseId = lowerCaseId.slice(1);
      }
      
      if(lowerCaseId[lowerCaseId.length - 1] === '.') {
          lowerCaseId = lowerCaseId.slice(0, lowerCaseId.length - 1)
      }
      
      if(lowerCaseId[0] !== '.' && lowerCaseId[lowerCaseId.length - 1] !== '.') {
          break;
      }
  }
  
  // 4. 5단계 빈 문자열 대응
  if(lowerCaseId === '') {
      lowerCaseId = 'a'
  }
  
  // 5. 6단계 길이 대응
  if(lowerCaseId.length >= 16) {
      lowerCaseId = lowerCaseId.slice(0, 15);
      
      while(true) {
          if(lowerCaseId[lowerCaseId.length - 1] === '.') {
              lowerCaseId = lowerCaseId.slice(0, lowerCaseId.length - 1);
          } else {
              break;
          }
      }
  }
  
  // 7단계 길이가 2자 이하면 마지막 문자 3이 될까지 더하기
  if(lowerCaseId.length < 3) {
      while(true) {
          lowerCaseId += lowerCaseId[lowerCaseId.length - 1];
          if(lowerCaseId.length === 3) break;
      }
  }
  
  return lowerCaseId;
}