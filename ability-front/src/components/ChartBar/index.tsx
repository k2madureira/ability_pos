'use client';
import { Chart as ChartJs, registerables } from 'chart.js';
import * as S from "./styles";
import { useEffect } from 'react';

interface IProps {
  data: number[]
}


export function ChartBar({ data }:IProps){
 
  useEffect(()=>{
    ChartJs.register(...registerables);
    const ctx = document.getElementById('chart-content') as any;
    new ChartJs(ctx,{
      type: 'bar',
      data:{
        labels:["Instruments","Naipes","Groups","Students"], 
        datasets:[
          {
            data,
            label:"Total",
            borderColor: [
              'rgba(95, 18, 184,0.5)',
              'rgba(126, 34, 206, 0.5)',
              'rgba(112, 26, 117,0.5)',
              'rgba(116, 1, 131,0.5)'
            ],
            backgroundColor: [
              'rgba(95, 18, 184,0.5)',
              'rgba(126, 34, 206, 0.5)',
              'rgba(112, 26, 117,0.5)',
              'rgba(116, 1, 131,0.5)'
            ],
            borderWidth: 1,
            borderRadius: 5,
            maxBarThickness: 30,
          
          }
        ]
      },  
     
    });
  },[]);
  
  return (
    
    <div className="grid-content-area">
      <S.Chart>
        <div className="chart-content">
          <canvas id='chart-content'></canvas>
        </div>
      </S.Chart>
    </div>
  );
}