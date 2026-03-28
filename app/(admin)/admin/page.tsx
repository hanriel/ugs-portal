import Card from "@/components/card";

export default async function Home()  {

  return (
    <>
      <div className="flex justify-between mt-8 mb-4">
        <h2 className="text-lg font-bold">Расписание</h2>
        <a className="text-xs" href="/all">Сформировано {}</a>
      </div>
      <section className="grid grid-cols-[1fr_1fr_1fry] gap-8">
        
      </section>

      <div className="flex justify-between mt-8 mb-4">
        <h2 className="text-lg font-bold">Мероприятия</h2>
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
      </section>
    </>
  );
}