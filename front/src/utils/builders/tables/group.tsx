import { GroupList } from '@/hooks/dto/Igroup.dto';
interface IGroup {
	key: string;
	nome: string;
	estudantes: number;
	iniciado: string;
	options: string;
}

export function useGroupTableData(isLoading: boolean, data: GroupList[]| undefined): { groupData:any} {
  
  let groupData: IGroup[] = [];
  if (!isLoading && data) {
		
		groupData = data.map(group => (
			{
				key: group.id,
				nome: group.name,
				estudantes: group.totalStudents,
				iniciado: group.createdAt,
				options: group.id
			}
			));
	}


  return { groupData}
}