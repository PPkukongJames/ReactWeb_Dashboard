import React from 'react';
import { Card, Stack } from '@mui/material';
import VuiBox from 'components/VuiBox';
import VuiTypography from 'components/VuiTypography';
import colors from 'assets/theme/base/colors';

import S_100 from './data/import_data/json/Winner_SET100.json'
import { IoHappy,IoWarning } from 'react-icons/io5';
import VuiButton from 'components/VuiButton';
import { Set_infoO, Set_infoD } from './data/Set_info';
import { Set50_infoO, Set50_infoD } from './data/Set50_info';
import { Mai_infoO, Mai_infoD } from './data/Mai_info';
import set from './data/import_data/json/Set_unit.json'
import BarChart from "examples/Charts/BarCharts/BarChart";
import Zoom_p from './Zoom_p.png';

let S_100_g=[[],[],[]]

for (let i=0;i<S_100.length;i++){
	S_100_g[0].push(S_100[i]['Time'])
	S_100_g[1].push(S_100[i]['SET100'])
	S_100_g[2].push(S_100[i]['Percent Capital'])
}




let num_S = S_100_g[2].length-1
let colorbg = "success"
let Iccc = <IoHappy size='30px' color='#fff' />
if (S_100_g[2][num_S-1]<=50){
	colorbg="error"
	Iccc = <IoWarning size='30px' color='#fff' />
}
let dif_S =S_100_g[2][num_S-2]-S_100_g[2][num_S-1]
let Port = <div>
  <h6><span style={{color:(dif_S<0? '#FF0000':'#00FF7F'),fontSize:"15px"}}>{(dif_S<0? "ลด":"เพิ่ม")}จากเมื่อวาน {dif_S}%</span></h6>
</div>
if (dif_S==0){
Port = <div>
  <h6>ไม่มีการเปลี่ยนแปลง</h6>
</div>
}

function SSM() {
	const { info, gradients } = colors;
	const { cardContent } = gradients;

	return (
		<Card >
			<VuiBox height="281px" width="100%">
			<div style={{width:"100%"}}>
			<VuiTypography variant='lg' color='white' mr='auto' fontWeight='bold'>
				<div style={{fontSize:"14px",color:"#a0aec0"}}>Date : {set['date'][set['date'].length-1]} </div>
				<div>Index scoring</div>
			</VuiTypography>
			<div align="right" style={{width:"100%",marginBottom:"-30px"}}>
			
			<VuiButton target="_blank" variant="text" color="info" size="large" href='/dashboard/Set_Unit' style={{display:"flex",justifyContent:"space-between"}}>
				<h4 align="left" style={{color:"white"}}>SET<img src={Zoom_p} width="20px" style={{marginBottom:"-2px"}} /></h4>
				
				<VuiBox sx={{ height: "90px" ,width:"90%" }} >
				<BarChart 
					barChartData={Set_infoD}	
					barChartOptions = {Set_infoO}
				/>
				
				</VuiBox>
			</VuiButton></div>
					
			<div align="right" style={{width:"100%",marginBottom:"-30px"}}>
			<VuiButton target="_blank" variant="text" color="info"  size="large" href='/dashboard/Set50_Unit' style={{display:"flex",justifyContent:"space-between"}}>
				<h4 style={{color:"white"}}>SET50<img src={Zoom_p} width="20px" style={{marginBottom:"-2px"}} /></h4><VuiBox sx={{ height: "90px" ,width:"90%" }}>
				<BarChart 
					barChartData={Set50_infoD}
					barChartOptions = {Set50_infoO}
				/>
				</VuiBox>
			</VuiButton></div>

			<div align="right" style={{width:"100%",marginBottom:"-30px"}}>
			<VuiButton target="_blank" variant="text" color="info" size="large" href='/dashboard/Mai_Unit' style={{display:"flex",justifyContent:"space-between"}}>
				<h4 style={{color:"white"}}>MAI<img src={Zoom_p} width="20px" style={{marginBottom:"-2px"}} /></h4><VuiBox sx={{ height: "90px" ,width:"90%" }}>
				<BarChart 
					barChartData={Mai_infoD}
					barChartOptions = {Mai_infoO}
				/>
				</VuiBox>
			</VuiButton></div>
			</div>
		</VuiBox>	
		</Card>
	);
}

export default SSM;





{/* <Stack
						direction='column'
						spacing='2px'
						width='300px'
						maxWidth='50%'
						sx={({ breakpoints }) => ({
							mr: 'auto',
							[breakpoints.only('md')]: {
								mr: '75px'
							},
							[breakpoints.only('xl')]: {
								width: '300px',
								maxWidth: '40%'
							}
						})}>
						<VuiButton variant="outlined" color="error" href="/dashboard/Set_Unit">SET<br/>{set['unit'][set['unit'].length-1]} คะแนน</VuiButton>
								
						<VuiButton variant="outlined" color="success" href="/dashboard/Set_Unit">SET50<br/>{set50['unit'][set50['unit'].length-1]} คะแนน</VuiButton>
						
						<VuiButton variant="outlined" color="warning" href="/dashboard/Set_Unit">Mai<br/>{mai['unit'][mai['unit'].length-1]} คะแนน</VuiButton>
					</Stack> */}
	{/* <VuiButton variant="text" color="info">
					<VuiBox sx={{ position: 'relative', display: 'inline-flex' }}>
						<CircularProgress
							variant='determinate'
							value={S_100_g[2][num_S-1]}
							size={200}
							color= "success"
						/>
						
						<VuiBox
							sx={{
								top: 0,
								left: 0,
								bottom: 0,
								right: 0,
								position: 'absolute',
								display: 'flex',
								alignItems: 'center',
								justifyContent: 'center'
							}}>
								<CircularProgress
								variant='determinate'
								value={S_100_g[2][num_S-1]}
								size={152}
								color= "info"/>
								
								<VuiBox
									sx={{
										top: 0,
										left: 0,
										bottom: 0,
										right: 0,
										position: 'absolute',
										display: 'flex',
										alignItems: 'center',
										justifyContent: 'center'
									}}>
										<CircularProgress
										variant='determinate'
										value={S_100_g[2][num_S-1]}
										size={110}
										color= "error"/>
								</VuiBox>
						</VuiBox>
					</VuiBox>
					</VuiButton> */}

					// <VuiBox
					// 		display='flex'
					// 		width='220px'
					// 		p='20px 22px'
					// 		flexDirection='column'
					// 		sx={({ breakpoints }) => ({
					// 			background: linearGradient(cardContent.main, cardContent.state, cardContent.deg),
					// 			borderRadius: '20px',
					// 			[breakpoints.up('xl')]: {
					// 				maxWidth: '150px !important'
					// 			},
					// 			[breakpoints.up('xxl')]: {
					// 				minWidth: '180px',
					// 				maxWidth: '100% !important'
					// 			}
					// 		})}>
					// 		<VuiTypography color='text' variant='button' fontWeight='regular' mb='5px'>
					// 		<VuiButton variant="gradient" color="info">SET</VuiButton>
					// 		</VuiTypography>
					// 		<VuiTypography color='white' variant='lg' fontWeight='bold'>
					// 			{S_100_g[0][S_100_g[0].length-1]}
					// 		</VuiTypography>
					// 	</VuiBox>

					// 	<VuiBox
					// 		display='flex'
					// 		width='220px'
					// 		p='20px 22px'
					// 		flexDirection='column'
					// 		sx={({ breakpoints }) => ({
					// 			background: linearGradient(cardContent.main, cardContent.state, cardContent.deg),
					// 			borderRadius: '20px',
					// 			[breakpoints.up('xl')]: {
					// 				maxWidth: '180px !important'
					// 			},
					// 			[breakpoints.up('xxl')]: {
					// 				minWidth: '180px',
					// 				maxWidth: '100% !important'
					// 			}
					// 		})}>
					// 		<VuiTypography color='white' variant='lg' fontWeight='bold'>
					// 		<VuiButton variant="gradient" color="info">SET</VuiButton>
					// 		</VuiTypography>
					// 	</VuiBox>