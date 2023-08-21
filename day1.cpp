#include <iostream>
#include <vector>

using namespace std;

int main(){
    string line = "0";
    string prevLine = "0";
    int i = 0, sum = 0;
    
    freopen("input.txt", "r", stdin);
    int cal[1000] = {0};

    getline(cin, line);
    
    while (line != "-1"){
        

        if (line.empty()){
            i++;
        } else if (!line.empty()){
            cal[i] += stoi(line);
        }

        prevLine = line;
        getline(cin, line);
    }

    int max = 0;
    for (int l = 0; l < 3; l++){
        int maxIndex = 0;
        max = 0;


        for (i = 0; i < 1000; i++){
            //if (cal[i] == 0) break;
            
            if (cal[i] > max){
                max = cal[i];
                maxIndex = i;
            }
            
        }
        cal[maxIndex] = -1;
        sum += max;
    }

    cout << endl << sum;


    return 0;
}