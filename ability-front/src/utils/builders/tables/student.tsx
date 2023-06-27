
import { User } from '@/hooks/dto/Iuser.dto';


interface IStudent {
	nome: string;
	grupo: string;
	instrumento: string;
	options: string;
}

export function useStudentTableData(isLoading: boolean, data: User[]| undefined): { studentData:any} {
  
  let studentData: IStudent[] = [];
  if (!isLoading && data) {
		
		studentData = data.map(student => (
			{
				nome: student.firstName,
				grupo: student.userGroup[0].group.name,
				instrumento: student.instrument.name,
				options: student.id
			}
			));
	}

 

  return { studentData}
}