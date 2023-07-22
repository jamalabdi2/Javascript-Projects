
def isvalidParanthesis(s:str):
    brackets = {'}':'{',']':'[',')':'('}
    mystack = []
    for bracket in s:
        if bracket in brackets.values():
            mystack.append(bracket)
        elif s in brackets.keys():
            #check if it matches with the opening bracket
            # chek if it exists inside the list and pop
            if not mystack or mystack.pop() != brackets[bracket]:
                return False
            
    return not mystack





s = "(){}[]"
isvalidParanthesis(s)