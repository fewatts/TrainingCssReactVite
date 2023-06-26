import './ChallangeOne.css';

export function ChallangeOne() {
    return (
        <>
            <header>
                <h1>Curiosidades sobre tecnologia</h1>
                <p>Tudo o que você sempre quis saber do mundo tech em um só lugar.</p>
            </header>
            <nav>
                <a href="#">Home</a>
                <a href="#">Notícias</a>
                <a href="#">Curiosidades</a>
                <a href="#">Fale conosco</a>
            </nav>
            <main>
                <article>
                    <h1>História do Mascote do Android</h1>

                    <p>Provavelmente você sabe que o sistema operacional Android, mantido pelo Google é um dos mais utilizados para dispositivos móveis em todo o mundo. Mas tavez você não saiba que o seu simpático mascote tem um nome e uma história muito curiosa? Pois acompanhe esse artigo para aprender muita coisa sobre esse robozinho.</p>

                    <h2>A primeira versão</h2>

                    <p>A primeira tentativa de criar um mascote surgiu em 2007 e veio de um desenvolvedor chamado Dan Morrill. Ele conta que abriu o Inkscape (software livre para vetorização de imagens) e criou sua própria versão de robô. O objetivo era apenas personificar o sistema apenas para a a sua equipe, não existia nenhuma solicitação da empresa para a criação de um mascote.</p>

                    <picture>
                        <source media="(max-width: 600px)" srcSet="https://i.imgur.com/ETvdroZ.png" />
                        <img src="https://i.imgur.com/vo9dtqv.png" alt="Primeiro mascote Android" />
                    </picture>

                    <p>Essa primeira versão bizarra até foi batizada em homenagem ao seu criador: seriam os Dandroids.</p>

                    <h2>Surge um novo mascote</h2>

                    <p>A ideia de ter um mascote foi amadurecendo e a missão foi passada para uma profissional da área. A ilustradora Russa Irina Blok, também funcionária do Google, ficou com a missão de representar o pequeno robô de uma maneira mais agradável.</p>

                    <picture>
                        <source media="(max-width: 600px)" srcSet="https://i.imgur.com/nvOzeyA.jpg" />
                        <img src="https://i.imgur.com/e2Ke9nm.jpg" alt="Irina blok" />
                    </picture>

                    <p>A ideia principal da Irina era representar tudo graficamente com poucos traços e de forma mais chapada. O desenho também deveria gerar identificação rápida com quem o olha. Surgiu então o Bugdroid, o novo mascote do Android.</p>

                    <img src="https://i.imgur.com/URp2nIC.png" alt="Android" id='imgandroid' />

                    <p>A principal inspiração para os traços do novo Bugdroid veio daqueles bonequinhos que ilustram portas de banheiro para indicar o gênero de cada porta. Conta a lenda que a artista estava criando em sua mesa no escritório do Google e olhou para o lado dos banheiros e a identificação foi imediata: simples, limpo, objetivo.</p>

                    <div><iframe src="https://www.youtube.com/embed/l2UDgpLz20M" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe></div>

                    <aside>
                        <h3>Quer aprender mais?</h3>
                        <p>Outro assunto curioso em relação ao Android é que cada versão sempre foi nomeada em homenagem a um doce, em ordem alfabética a partir da versão 1.5 até a 9.0.</p>
                        <ul>
                            <li>1.5 - <abbr title="Bolo de copo">Cupcake</abbr></li>
                            <li>1.6 - <abbr title="Rosquinha">Donut</abbr></li>
                            <li>3.0 - <abbr title="Bomba">Eclair</abbr></li>
                            <li>2.2 - <abbr title="Ioguste congelado">Froyo</abbr></li>
                            <li>2.3 - <abbr title="Biscoito de gengibre">Gingerbread</abbr></li>
                            <li>3.0 - <abbr title="Favo de mel">Honeycomb</abbr></li>
                            <li>4.0 - <abbr title="Sanduiche de sorvete">Ice Cream Sandwich</abbr></li>
                            <li>4.1 - <abbr title="Jujuba">Jelly Bean</abbr></li>
                            <li>4.4 - <abbr title="Kitkat">KitKat</abbr></li>
                            <li>5.0 - <abbr title="Pirulito">Lolipop</abbr></li>
                            <li>6.0 - <abbr title="Marshmallow">Marshmallow</abbr></li>
                            <li>7.0 - <abbr title="Torrone">Nougat</abbr></li>
                            <li>8.0 - <abbr title="Oreo">Oreo</abbr></li>
                            <li>9.0 - <abbr title="Torta">Pie</abbr></li>
                        </ul>
                        <p>
                            Infelizmente, o Android Q não existiu, pois o Google resolveu pôr fim a essa divertida prática e começou a usar numerações, o que deu origem ao Android 10.
                            Acesse aqui o site Android History para conhecer a sequência das versões "adocicadas" e o que cada uma trouxe para o sistema Android.
                        </p>
                    </aside>


                    Então é isso! Espero que você tenha gostado do nosso artigo com essa curiosidade sobre o sistema Android e seu simpático mascote.
                </article>
            </main>
            <footer>
                <p>Created by Fernando as a Curso em vídeo challange.</p>
            </footer>
        </>
    );
}