import { ScheduleTimeTable } from "@/const/scheduleTable";
import React from "react";

const ScheduleSection = () => {
  return (
    <section>
      <div className="max-w-4xl p-4 my-16 mx-auto">
        <div className="flex flex-col gap-8 text-center min-h-[75vh] justify-center">
          <h2 className="font-climate-crisis text-5xl">Schedule</h2>
          <div>
            <div className="overflow-x-auto">
              <table className="table table-zebra text-center text-xl break-keep">
                <thead className="text-2xl">
                  <tr>
                    <th>시간</th>
                    <th>프로그램</th>
                  </tr>
                </thead>
                <tbody>
                  {ScheduleTimeTable.map(({ time, program, id }) => (
                    <tr key={id}>
                      <td>{time}</td>
                      <td>{program}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScheduleSection;
