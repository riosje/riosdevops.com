---
name: Bash variables and functions
language: BASH
categories: [variables, functions, arrays]
sections:
  code1:
      description: "Simple Env"
      codeblock: |
  
        #!/bin/bash
        MYVAR=('A')
        echo $MYVAR # Outputs: A
  code2:
      description: "Declare an associative array"
      codeblock: |
  
        #!/bin/bash
        declare -A myArray
        myArray["key1"]="A"
        myArray["key2"]="B"
        echo ${myArray["key1"]}  # Outputs: A
        echo ${myArray["key2"]}  # Outputs: B
---
