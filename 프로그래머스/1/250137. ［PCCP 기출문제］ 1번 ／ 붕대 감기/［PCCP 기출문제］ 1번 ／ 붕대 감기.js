function solution(bandage, health, attacks) {
    var answer = 0;
    var i;
    var lastAttack = attacks.length;
    var attackTime = 0;
    var successCombo = 0;
    var maxHealth = health;
    for(i = 1; i <= attacks[lastAttack-1][0]; i++) {
        if(health < 1){
            answer = -1;
            return answer;
        }
        if(attacks[attackTime][0] == i){
            health = health - attacks[attackTime][1];
            attackTime++;
            successCombo = 0;
        }
        else {
            successCombo++;
            if(successCombo == bandage[0]){
                successCombo = 0;
                health = health + bandage[2];
                health = health + bandage[1];
            }
            else {
                health = health + bandage[1];
            }
            if(health > maxHealth){
                health = maxHealth;
            }
        }     
    }
    if(health < 1){
        answer = -1;
    }
    else {
        answer = health;
    }
    return answer;
}