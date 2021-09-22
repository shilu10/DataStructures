def reverse(x):
    value=str(x)
    

    if value[0]=="-" and value[len(value)-1]=="0":
        answer="-"+value[-2:0:-1]
        
    elif value[0]=='0':
        answer=int(value[::-1])

    elif value[0]=="-":
        answer=-+int(value[:0:-1])

    else:
        answer=value[-2::-1]

    answer=str(answer)
        

    return answer)

print(reverse("-0"))
