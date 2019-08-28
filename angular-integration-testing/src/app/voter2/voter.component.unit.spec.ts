import { Voter2Component } from './voter2.component'; 
//import { exec } from 'child_process';

describe('Unit test - Voter2Component', () => {
  let component : Voter2Component;
  
  beforeEach(() => {
    // arrange
    component = new Voter2Component();
   });

  it('should increment totalVotes when upvoted', () => {
    // act
    component.upVote();
  
    // assert
    expect(component.totalVotes).toBe(1);
  });

  it('should decrement totalVotes when downvoted', () => {
    
    // act
    component.downVote();
  
    // assert
    expect(component.totalVotes).toBe(-1);
  });
  
  it('should raise voteChanged event when upvoted', () => {
    let totalV = null;
    component.vote.subscribe(tv => totalV = tv);
    component.upVote();
    expect(totalV).toBe(1);
  });
});