---
name: Bash loops
language: BASH
categories: [loops, for, while, array]
sections:
  code1:
      description: "For loop array"
      codeblock: |
  
        #!/bin/bash
        LETTERS=('A' 'B' 'C')
        for letter in "${LETTERS[@]}"
        do
          echo "$letter"
        done
        #Outputs: "A B C"
  code2:
      description: "For loop range"
      codeblock: |

        #!/bin/bash
        for i in {1..5}
        do
          echo "$i"
        done
        #Outputs: "1 2 3 4 5"
  code3:
      description: "For loop Associative Array"
      codeblock: |
  
        #!/bin/bash
        declare -A myArray
        myArray["key1"]="A"
        myArray["key2"]="B"
        for key in "${!myArray[@]}"; do
            echo "Key: $key, Value: ${myArray[$key]}"
        done
---
