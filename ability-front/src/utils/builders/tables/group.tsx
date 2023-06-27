import { Group } from '@/hooks/dto/Igroup.dto';
interface IGroup {
	nome: string;
	estudantes: number;
	iniciado: string;
	options: string;
}

export function useGroupTableData(isLoading: boolean, data: Group[]| undefined): { groupData:any} {
  
  let groupData: IGroup[] = [];
  if (!isLoading && data) {
		
		groupData = data.map(group => (
			{
				nome: group.name,
				estudantes: group.totalStudents,
				iniciado: group.createdAt,
				options: group.id
			}
			));
	}


  return { groupData}
}