#include <stdio.h>
#include <string.h>

#define MAX_USUARIOS 10

typedef struct {
    char nome[50];
    int idade;
} Usuario;

int main() {
    Usuario usuarios[MAX_USUARIOS];
    int total = 0;
    int opcao;

    printf("=====================================\n");
    printf("   SISTEMA DE CADASTRO DE USUARIOS\n");
    printf("=====================================\n");

    do {
        printf("\nMenu:\n");
        printf("1 - Cadastrar usuario\n");
        printf("2 - Listar usuarios\n");
        printf("3 - Sair\n");
        printf("Escolha uma opcao: ");

        if (scanf("%d", &opcao) != 1) {
            // entrada inválida (não numérica)
            printf("\nEntrada invalida. Digite um numero.\n");
            while (getchar() != '\n'); // limpa buffer
            continue;
        }
        getchar(); // consome '\n'

        if (opcao == 1) {
            if (total >= MAX_USUARIOS) {
                printf("\nLimite de usuarios atingido (%d).\n", MAX_USUARIOS);
                continue;
            }

            char nomeTemp[50];
            int idadeTemp;

            printf("\n--- Novo Cadastro ---\n");

            printf("Nome: ");
            fgets(nomeTemp, sizeof(nomeTemp), stdin);
            nomeTemp[strcspn(nomeTemp, "\n")] = '\0'; // remove '\n'

            if (strlen(nomeTemp) < 3) {
                printf("Erro: nome deve ter pelo menos 3 caracteres.\n");
                continue;
            }

            printf("Idade: ");
            if (scanf("%d", &idadeTemp) != 1) {
                printf("Erro: idade invalida (use numeros).\n");
                while (getchar() != '\n');
                continue;
            }
            getchar(); // consome '\n'

            if (idadeTemp < 0 || idadeTemp > 120) {
                printf("Erro: idade deve estar entre 0 e 120.\n");
                continue;
            }

            // grava no array somente após validar tudo
            strcpy(usuarios[total].nome, nomeTemp);
            usuarios[total].idade = idadeTemp;
            total++;

            printf("\nCadastro realizado com sucesso!\n");

        } else if (opcao == 2) {
            printf("\n--- Lista de Usuarios ---\n");

            if (total == 0) {
                printf("Nenhum usuario cadastrado.\n");
            } else {
                for (int i = 0; i < total; i++) {
                    printf("%d) Nome: %s | Idade: %d\n",
                           i + 1,
                           usuarios[i].nome,
                           usuarios[i].idade);
                }
            }

        } else if (opcao != 3) {
            printf("\nOpcao invalida.\n");
        }

    } while (opcao != 3);

    printf("\nEncerrando sistema...\n");
    return 0;
}