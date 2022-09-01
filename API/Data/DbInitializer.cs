using System.Collections.Generic;
using System.Linq;
using API.Entities;

namespace API.Data
{
    public static class DbInitializer
    {
        public static void Initialize(StoreContext context) 
        {
            if(context.Products.Any()) return;

            var products = new List<Product>
            {
                new Product
                {
                    Name = "A verdade vive escondida num cemiterio",
                    Description =
                        "Ela adotou o nome Calexa Rose Dunhill, inspirada numa lápide do sombrio ambiente em que acordou, ferida e apavorada, sem qualquer lembrança de sua identidade.",
                    Price = 150,
                    PictureUrl = "/images/products/livro-cool1.png",
                    Brand = "Cool",
                    Type = "Livro",
                    QuantityInStock = 50
                },
                new Product
                {
                    Name = "Filhos do Edem",
                    Description = "Filhos do Éden é uma trilogia de livros de literatura fantástica, que aborda temas como anjos",
                    Price = 160,
                    PictureUrl = "/images/products/livro-cool2.png",
                    Brand = "Cool",
                    Type = "Livro",
                    QuantityInStock = 50
                },
                new Product
                {
                    Name = "A História do Século 20 Para Quem Tem Pressa",
                    Description =
                        "A História do Século 20 para Quem Tem Pressa é um guia acessível para 100 anos de história moderna.",
                    Price = 100,
                    PictureUrl = "/images/products/livro-cool3.png",
                    Brand = "Cool",
                    Type = "Livro",
                    QuantityInStock = 50
                },
                new Product
                {
                    Name = "A História do Século 20 Para Quem Tem Pressa",
                    Description =
                        "A História do Século 20 para Quem Tem Pressa é um guia acessível para 100 anos de história moderna.",
                    Price = 100,
                    PictureUrl = "/images/products/livro-cool4.png",
                    Brand = "Cool",
                    Type = "Livro",
                    QuantityInStock = 50
                },
                new Product
                {
                    Name = "A Garota do Cemitério",
                    Description =
                        "Ela adotou o nome Calexa Rose Dunhill, inspirada numa lápide do sombrio ambiente em que acordou, ferida e apavorada, sem qualquer lembrança de sua identidade, de quem a jogou lá para morrer ou mesmo do porquê.",
                    Price = 100,
                    PictureUrl = "/images/products/livro-cool5.png",
                    Brand = "Livro",
                    Type = "Cool",
                    QuantityInStock = 50
                },
                new Product
                {
                    Name = "Almofada Iron Man - Marvel",
                    Description =
                        "Tony Stark ficou conhecido por sua mente brilhante. O engenheiro bilionário construiu sua própria armadura high-tech para combater o crime.",
                    Price = 150,
                    PictureUrl = "/images/products/almofada-super1.png",
                    Brand = "Super",
                    Type = "Almofada",
                    QuantityInStock = 50
                },
                new Product
                {
                    Name = "Almofada Hora da Aventura",
                    Description =
                        "Quando as palavras mágicas \"Hora da aventura\" são ditas por Finn e Jake, tudo pode acontecer.",
                    Price = 80,
                    PictureUrl = "/images/products/almofada-super2.png",
                    Brand = "Super",
                    Type = "Almofada",
                    QuantityInStock = 50
                },
                new Product
                {
                    Name = "Almofada Hora da Aventura Pop Art",
                    Description =
                        "Além de super macia e confortável ela vai dar um Up na decoração da sua casa com um toque de criatividade e diversão.",
                    Price = 80,
                    PictureUrl = "/images/products/almofada-super3.png",
                    Brand = "Super",
                    Type = "Almofada",
                    QuantityInStock = 50
                },
                new Product
                {
                    Name = "Almofada Hora da Aventura Pop",
                    Description =
                        "Não perca a oportunidade de animar seu dia e participar de diversas aventuras no mundo dos sonhos com a almofada",
                    Price = 80,
                    PictureUrl = "/images/products/almofada-super4.png",
                    Brand = "Super",
                    Type = "Almofada",
                    QuantityInStock = 50
                },
                new Product
                {
                    Name = "Almofada Iron Man - 2",
                    Description =
                        "Aconchegante e fofina para te ajudar a combater o crime na cidade de nova york",
                    Price = 80,
                    PictureUrl = "/images/products/almofada-super5.png",
                    Brand = "Super",
                    Type = "Almofada",
                    QuantityInStock = 50
                },
                new Product
                {
                    Name = "Meia Star Wars Darth Vader",
                    Description =
                        "Vinda direto de uma galáxia muito distante direto para seu guarda-roupa.",
                    Price = 40,
                    PictureUrl = "/images/products/meia-penny1.png",
                    Brand = "Penny",
                    Type = "Meia",
                    QuantityInStock = 50
                },
                new Product
                {
                    Name = "Meia Não Salvo",
                    Description =
                        "Para quem gosta de trollar, entrar na pelo de Cid Cidoso, o rei dos Trolls.",
                    Price = 40,
                    PictureUrl = "/images/products/meia-penny2.png",
                    Brand = "Penny",
                    Type = "Meia",
                    QuantityInStock = 50
                },
                new Product
                {
                    Name = "Meia Super Homem",
                    Description =
                        "Superman vindo de Krypton e tinha o nome de Kal-El. Foi mandado à Terra por seu pai, Jor-El, um cientista, momentos antes do planeta explodir.",
                    Price = 40,
                    PictureUrl = "/images/products/meia-penny3.png",
                    Brand = "Penny",
                    Type = "Meia",
                    QuantityInStock = 50
                },
                new Product
                {
                    Name = "Meia Super Homem",
                    Description =
                        "Quando não está com o tradicional uniforme azul e vermelho, ele vive como Clark Kent, repórter no Planeta Diário, junto com Lois Lane.",
                    Price = 40,
                    PictureUrl = "/images/products/meia-penny4.png",
                    Brand = "Penny",
                    Type = "Meia",
                    QuantityInStock = 50
                },
                new Product
                {
                    Name = "Meia Não Ouvo",
                    Description = "A mentira tem perna curta, mas tem a melhor vestimenta.",
                    Price = 40,
                    PictureUrl = "/images/products/meia-penny5.png",
                    Type = "Meia",
                    Brand = "Penny",
                    QuantityInStock = 50,
                },
                new Product
                {
                    Name = "Camiseta Básica Branca",
                    Description =
                        "Todo nerd precisa de uma camiseta básica.",
                    Price = 100,
                    PictureUrl = "/images/products/camiseta-rock1.png",
                    Brand = "Rock",
                    Type = "Camiseta",
                    QuantityInStock = 50
                },
                new Product
                {
                    Name = "Camiseta Senhor K",
                    Description = "Agora você pode vestir a sua célebre frase na versão BLACK EDITION. Afinal de contas, argumento nenhum vai te dar o sossego da paz interior.",
                    Price = 100,
                    PictureUrl = "/images/products/camiseta-rock2.png",
                    Brand = "Rock",
                    Type = "Camiseta",
                    QuantityInStock = 50
                },
                new Product
                {
                    Name = "Camiseta Básica Cinza",
                    Description =
                        "Esta é a camiseta básica cinza mescla ideal para você usar em qualquer ambiente e não perder a sua identidade nerd.",
                    Price = 100,
                    PictureUrl = "/images/products/camiseta-rock3.png",
                    Brand = "Rock",
                    Type = "Camiseta",
                    QuantityInStock = 50
                },
                   new Product
                {
                    Name = "Camiseta Básica Preta",
                    Description =
                        "Esta é a camiseta básica preta ideal para você usar em qualquer ambiente e não perder a sua identidade nerd.",
                    Price = 100,
                    PictureUrl = "/images/products/camiseta-rock4.png",
                    Brand = "Rock",
                    Type = "Camiseta",
                    QuantityInStock = 50
                },
                  new Product
                {
                    Name = "Camiseta Básica Branca",
                    Description =
                        "Esta é a camiseta básica branca ideal para você usar em qualquer ambiente e não perder a sua identidade nerd.",
                    Price = 100,
                    PictureUrl = "/images/products/camiseta-rock5.png",
                    Brand = "Rock",
                    Type = "Camiseta",
                    QuantityInStock = 50
                },
                  new Product
                {
                    Name = "Caneca Star Wars Darth Vader 3D",
                    Description =
                        "A Caneca Star Wars 3D Darth Vader é uma caneca em formato 3D da cabeça do Darth Vader, quando você estiver tomando aquele cafezinho e olhar a caneca você vai pensar que ele está falando",
                    Price = 150 ,
                    PictureUrl = "/images/products/caneca-show1.png",
                    Brand = "Show",
                    Type = "Caneca",
                    QuantityInStock = 50
                },
                  new Product
                {
                    Name = "Caneca Star Wars Stormtrooper 3D",
                    Description =
                        "Se prepare para embarcar para Hogwarts com esta caneca vermelha do Harry Potter com o tema da famosa Plataforma 9 3/4!",
                    Price = 150,
                    PictureUrl = "/images/products/caneca-show2.png",
                    Brand = "Show",
                    Type = "Caneca",
                    QuantityInStock = 50
                },
                  new Product
                {
                    Name = "Caneca Mágica Donkey Kong",
                    Description =
                        "É hora de celebrar suas conquistas como um verdadeiro viking com esta caneca Viking Skull! Com formato de crânio e elmo no melhor estilo nórdico, sua bebida irá ficar mais estilosa e vc será digno para entrar em Valhalla!",
                    Price = 150,
                    PictureUrl = "/images/products/caneca-show3.png",
                    Brand = "Show",
                    Type = "Caneca",
                    QuantityInStock = 50
                },
                  new Product
                {
                    Name = "Caneca Star Wars Stormtrooper 3D",
                    Description =
                        "Até o mais atrapalhado Stormtrooper do Império gosta de um cafézinho bem quentinho em sua caneca favorita.",
                    Price = 150,
                    PictureUrl = "/images/products/caneca-show4.png",
                    Brand = "Show",
                    Type = "Caneca",
                    QuantityInStock = 50
                },
                  new Product
                {
                    Name = "Caneca Mágica Donkey Kong",
                    Description =
                        "Donkey Kong demonstra orgulho pela sua grande força física, algumas vezes preguiçoso, descansa em uma espreguiçadeira tomando seus milkshakes de banana.",
                    Price = 150,
                    PictureUrl = "/images/products/caneca-show5.png",
                    Brand = "Show",
                    Type = "Caneca",
                    QuantityInStock = 50
                },
                
            };

            foreach (var product in products)
            {
                context.Products.Add(product);
            }

            context.SaveChanges();
        }
    }
}