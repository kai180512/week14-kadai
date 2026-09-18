import BookCard from './components/BookCard'
import Header from './Header'
import Footer from './Footer'

const BookData = [
  {
    id:1,
    title:"濁唾濔蓏",
    author:"餅屋䖸",
    star:5,
    comment:"入ってるほとんど全ての話の後味が悪い短編集です。モキュメンタリー調の小説で、過去話題になった「近畿地方のある場所について」や「右園死児報告」と同じ系譜の作品ですが、私個人の感想としてはこれが一番面白かったです"
  },
  {
    id:2,
    title:"忍者と極道 エンジン・ハート・ラブ",
    author:"珪素",
    star:"4",
    comment:"コミックDAYS連載の『忍者と極道』の公式外伝小説。極道と敵対する忍者の一人、祭下陽日を主人公としたストーリーで本編の前日譚です。"
  },
  {
    id:3,
    title:"プロジェクトヘイルメアリー",
    author:"アンディ・ウィアー",
    star:"5",
    comment:"映画化もされた小説で、SF小説でもありバディ物の小説でもあります。去年読んだものの中では一番面白かったです"
  }
]

function App(){
  return(
    <>
    <Header />
    <main className="max-w-2xl mx-auto p-4 space-y-4">
        {BookData.map((book) => (
          <BookCard
            key={book.id}
            title={book.title}
            author={book.author}
            star={book.star}
            comment={book.comment}
          />
        ))}
    </main>
    <Footer />
    </>
  );
}

export default App;