import Card from "@/components/card";

export default function Home() {
  return (
    <>
      <div className="flex justify-between ml-8 mr-4">
        <h2 className="text-lg">Мероприятия</h2>
        <a className="text-xs" href="/all">См. ещё</a>
      </div>

      <section className="grid grid-cols-[1fr_1fr_1fr_1fr] gap-8">
        <Card
          date="ПН 5 февраля 2024 08:29"
          text="Церемония поднятия Государственного флага РФ ТКПД-2023-1, ТМС-2023-3/6, ЭКТ-2023-1"
          descr="Ответственные: Приказчиков&nbsp;И.В."
        />
        <Card
          date="ПН 5 февраля 2024 08:30"
          text="Разговоры о важном"
          descr="Ответственные: Кураторы групп"
          />
        <Card
          date="ВТ 6 февраля 2024"
          text="Малый педагогический совет в группе ТКПД-2021-1 (240а)"
          descr="Ответственные: Поспелова&nbsp;И.А., Чебан&nbsp;Ж.В."
        />
        <Card
          date="ПН 5 февраля 2024 08:29"
          text="Церемония поднятия Государственного флага РФ ТКПД-2023-1, ТМС-2023-3/6, ЭКТ-2023-1"
          descr="Ответственные: Приказчиков&nbsp;И.В."
        />
        <Card
          date="ПН 5 февраля 2024 08:29"
          text="Церемония поднятия Государственного флага РФ ТКПД-2023-1, ТМС-2023-3/6, ЭКТ-2023-1"
          descr="Ответственные: Приказчиков&nbsp;И.В."
        />
        <Card
          date="ПН 5 февраля 2024 08:29"
          text="Церемония поднятия Государственного флага РФ ТКПД-2023-1, ТМС-2023-3/6, ЭКТ-2023-1"
          descr="Ответственные: Приказчиков&nbsp;И.В."
        />
        <Card
          date="ПН 5 февраля 2024 08:29"
          text="Церемония поднятия Государственного флага РФ ТКПД-2023-1, ТМС-2023-3/6, ЭКТ-2023-1"
          descr="Ответственные: Приказчиков&nbsp;И.В."
        />
        <Card
          date="ПН 5 февраля 2024 08:29"
          text="Церемония поднятия Государственного флага РФ ТКПД-2023-1, ТМС-2023-3/6, ЭКТ-2023-1"
          descr="Ответственные: Приказчиков&nbsp;И.В."
        />
      </section>

      <div className="flex justify-between ml-8 mr-4">
        <h2 className="text-lg">Цифры и факты</h2>
        <a className="text-xs" href="/all">См. ещё</a>
      </div>

      {/* <section className="section__cards">
        <article className="card">
          <div className="card__container">
            <h3>95%</h3>
            <i>уровень трудоустройства выпускников спустя пол года после окончания колледжа</i>
          </div>
        </article>
        <article className="card">
          <div className="card__container">
            <h3>>16 тыс.</h3>
            <i>выпускников основных образовательных программ</i>
          </div>
        </article>
        <article className="card">
          <div className="card__container">
            <h3>>50</h3>
            <i>преподавателей и исследователей</i>
          </div>
        </article>
        <article className="card">
          <div className="card__container">
            <h3>>5 тыс.</h3>
            <i>выпускников ДПО</i>
          </div>
        </article>
      </section> */}


    </>
  );
}
