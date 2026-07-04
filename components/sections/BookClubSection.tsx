import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { CircularGallery } from "@/components/ui/CircularGallery";
import { Section } from "@/components/ui/Section";
import { SectionTitle } from "@/components/ui/SectionTitle";

const clubPhotos = [
  "https://sun9-86.userapi.com/s/v1/ig2/FlGeZgSwYEnOqHK0Z6LnkHHj9kq7jqD5x1usDTDO9bJ6gbbwuvtt7t8xBwM714SlvWayENoLiYcJWiKlOek1fTRJ.jpg?quality=95&as=32x24,48x36,72x54,108x81,160x120,240x180,360x270,480x360,540x405,640x480,720x540,1040x780&from=bu&cs=1040x0",
  "https://sun9-26.userapi.com/s/v1/ig2/WU-KzmTchpu51AKxSZ0mi8oKxk7zXfwwrvBU5L1xvS9e-0h7q2J9L0ZjquTkmvwpviGcr6EnWfCk6_T0WuHPpnEa.jpg?quality=95&as=32x69,48x104,72x156,108x234,160x347,240x520,360x780,480x1040,540x1170,591x1280&from=bu&cs=591x0",
  "https://sun9-23.userapi.com/s/v1/ig2/W6ccIrH5UW-Gc_Cvm10MNBEizf8Gi62aDXhT6T1mnw0bn3GR47DzYGZGjO87z93TQtbRQW0R_AZeK4vJsKkx-eth.jpg?quality=95&as=32x69,48x104,72x156,108x234,160x347,240x520,360x780,480x1040,540x1170,591x1280&from=bu&cs=591x0",
  "https://sun9-71.userapi.com/s/v1/ig2/TVSfg0uK9wqIJVA1IN8BYy9jcbKbaEwXZrNvQohrvVYYjNZsNQOLLBgmj_pGM28ZJR8Y-IHgmwUIv69mWj_hE_sv.jpg?quality=95&as=32x69,48x104,72x156,108x234,160x347,240x520,360x780,480x1040,540x1170,591x1280&from=bu&cs=591x0",
  "https://sun9-24.userapi.com/s/v1/ig2/74K8Vjxkp-L1xpHqNIwEKq0R2baPO5mgTbUGYWXT-6BLzuJvNMr3Qr9OqBcGlrqNf74x6nUUUTbqWVTJwBpyGbHs.jpg?quality=95&as=32x24,48x36,72x54,108x81,160x120,240x180,360x270,480x360,540x405,640x480,720x540,1000x750&from=bu&cs=1000x0",
  "https://sun9-44.userapi.com/s/v1/ig2/yp3gcYCcZBDoJ0fxvG7PEIm9qBQwuMxhYxSWShr7nB9oJeE5vO0_upDZ3zxryTinkRC8ke3UZe19GISsq-jHQeu0.jpg?quality=95&as=32x69,48x104,72x156,108x234,160x347,240x520,360x780,480x1040,540x1170,591x1280&from=bu&cs=591x0",
  "https://sun9-32.userapi.com/s/v1/ig2/0_mhPXchmJyaMKapZa2-DIowxQE6euOUlh2taGh0Fvs7ehu-xpNtI9485-t-FHfqxX7ySdLra024Js-ozcgAxIDJ.jpg?quality=95&as=32x26,48x39,72x58,108x88,160x130,240x195,360x292,480x390,540x438,640x520,720x584,797x647&from=bu&cs=797x0",
  "https://sun9-79.userapi.com/s/v1/ig2/YLCoXtzZRa_jjR6hLkNZmnLpOH4ioB1QvL9-4Kb4LdXuurpO7cE3f6xIia8ro0j6qqfXxcFNOvoeaBvPG44H2i7f.jpg?quality=95&as=32x36,48x54,72x80,108x121,160x179,240x268,360x402,480x536,540x603,640x715,720x804,776x867&from=bu&cs=776x0",
];

export function BookClubSection() {
  return (
    <Section id="book-club" className="bg-panel/35">
      <div className="relative overflow-hidden rounded-shell border border-border/70 bg-[linear-gradient(180deg,rgba(251,247,241,0.96)_0%,rgba(244,232,217,0.88)_52%,rgba(238,224,209,0.84)_100%)] px-6 py-10 shadow-elevated sm:px-8 lg:px-12 lg:py-12">
        <div className="paper-grid absolute inset-0 opacity-42" />
        <div className="absolute inset-0 bg-gradient-to-br from-paper/52 via-paper/22 to-panel/28" />

        <div className="relative">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <SectionTitle
              eyebrow="Книжный клуб"
              title="Книжный клуб и мероприятия"
              description="Встречи и события магазина — следите за ближайшими датами."
            />
            <Button href="/book-club" variant="secondary" className="transition duration-300 hover:-translate-y-0.5 hover:shadow-card">
              Смотреть мероприятия
              <ArrowRight className="size-4" />
            </Button>
          </div>

          <Card className="mt-8 bg-panel/84 transition duration-300 hover:bg-panel/90">
            <p className="max-w-4xl text-base leading-8 text-muted-foreground">
              Книжный клуб в лавке — это уютные встречи для тех, кто любит читать не в одиночку. Мы собираемся, чтобы
              обсуждать книги, делиться впечатлениями, спорить о героях, находить новые смыслы и просто проводить
              время среди своих.
              <br />
              <br />
              Здесь можно следить за ближайшими встречами, смотреть фотографии прошедших событий и узнавать о новых
              темах, подборках и книжных поводах. Приходите — будем читать, говорить и влюбляться в книги заново.
            </p>
          </Card>

          <div className="mt-8 p-0">
            <CircularGallery images={clubPhotos} altPrefix="Фотография книжного клуба" />
          </div>
        </div>
      </div>
    </Section>
  );
}
