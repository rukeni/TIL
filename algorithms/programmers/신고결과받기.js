function solution(id_list, report, k) {
  // 1. 중복신고를 제거한다.
  // 2. 신고유저와 신고당한유저를 분리한다.

  const uniqueReport = Array.from(new Set(report)).map(report => {
      return report.split(' ');
  });
  
  const blackUsers = new Array(id_list.length).fill(0);
  const whiteUsers = new Array(id_list.length).fill(0);
  
  // 3. 신고 유저, 신고당한유저 카운팅하기    
  for(let i = 0; i < uniqueReport.length; i++) {
      const blackUserName = uniqueReport[i][1];
      const blackUserIndex = id_list.findIndex(target => target === blackUserName);
      blackUsers[blackUserIndex]++;

  }
  
  for(let j = 0; j < uniqueReport.length; j++) {
      const blackUserName = uniqueReport[j][1];
      const blackUserIndex = id_list.findIndex(target => target === blackUserName);
      const whiteUserName = uniqueReport[j][0];
      const whiteUserIndex = id_list.findIndex(target => target === whiteUserName);
      if(blackUsers[blackUserIndex] >= k) {
          whiteUsers[whiteUserIndex]++;            
      }
  }
  return whiteUsers;
}