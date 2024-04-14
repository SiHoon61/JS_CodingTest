function solution(park, routes) {
    var dog;
    var test;
    var h = park.length;
    var w = park[0].length;
    for(i = 0 ; i < park.length ; i++) {
        for(j = 0 ; j < park[i].length ; j++) {
            if(park[i][j] === 'S'){
                dog = [i, j];
                test = [i, j];
            }
        }
    }
   
    for(i = 0 ; i < routes.length ; i++) {
        if(routes[i][0] == 'E'){
            for( j = 0 ; j < routes[i][2] ; j++) {
                test[1]++;
                if(test[1] >= w){
                    test = dog;
                    break
                }
                else if(park[test[0]][test[1]] === 'X'){
                    test = dog;
                    break
                } 
            }
        }
        else if(routes[i][0] == 'W'){
            for( j = 0 ; j < routes[i][2] ; j++){
                test[1]--;
                if(test[1] < 0){
                    test = dog;
                    break
                }
                else if(park[test[0]][test[1]] === 'X'){
                    test = dog;
                    break
                }  
            }
        }
        else if(routes[i][0] == 'S'){
            for( j = 0 ; j < routes[i][2] ; j++){
                test[0]++;
                if(test[0] >= h){
                    test = dog;
                    break
                }
                else if(park[test[0]][test[1]] === 'X'){
                    test = dog;
                    break
                }         
            }
        }
        else if(routes[i][0] == 'N'){
            for( j = 0 ; j < routes[i][2] ; j++){
                test[0]--;
                if(test[0] < 0){
                    test = dog;
                    break
                }
                else if(park[test[0]][test[1]] === 'X'){
                    test = dog;
                    break
                }
            }

        }
        dog = [...test];
    }

    return dog;
}