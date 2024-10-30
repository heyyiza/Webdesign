import itertools

numeros = range(10)  # 0 a 9
letras = [chr(i) for i in range(ord('A'), ord('Z') + 1)]  # A a Z

combinacoes = []

for n1 in numeros:
    for letra in letras:
        for n2 in numeros:
            for n3 in numeros:
                combinacoes.append(f"{n1}{letra}{n2}{n3}")

# Imprimindo todas as combinações
for combinacao in combinacoes:
    print(combinacao)