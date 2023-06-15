import React from 'react';
import { Card, Stack } from '@mui/material';
import VuiBox from 'components/VuiBox';
import VuiTypography from 'components/VuiTypography';
import colors from 'assets/theme/base/colors';
import { FaEllipsisH } from 'react-icons/fa';
import linearGradient from 'assets/theme/functions/linearGradient';
import CircularProgress from '@mui/material/CircularProgress';
import S_100 from './data/import_data/json/Winner_SET100.json'
import { IoHappy,IoWarning } from 'react-icons/io5';
import Down from "./Graph_up_down/Down.png"
import Up from "./Graph_up_down/Up.png"
import no_Change from "./Graph_up_down/no_c.png"
import VuiButton from 'components/VuiButton';
import score_90 from './emoji/90_100.png';
import score_80 from './emoji/80_89.png';
import score_70 from './emoji/70_79.png';
import score_50 from './emoji/50_69.png';
import score_40 from './emoji/40_49.png';
import score_30 from './emoji/30_39.png';
import score_20 from './emoji/20_29.png';
import score_0 from './emoji/0_19.png';
import { bgcolor } from '@mui/system';
import Zoom_p from './Zoom_p.png';

let S_100_g=[[],[],[]]

for (let i=0;i<S_100.length;i++){
	S_100_g[0].push(S_100[i]['Time'])
	S_100_g[1].push(S_100[i]['SET100'])
	S_100_g[2].push(S_100[i]['Percent Capital'])
  }



let num_S = S_100_g[2].length
let score =  S_100_g[2][num_S-1]
let colorbg = "success"
let Iccc = <img src={score_90} width="200px" />
if (score<90){
	Iccc = <img src={score_80} width="200px" />
}if (score<80){
	colorbg = "warning"
	Iccc = <img src={score_70} width="200px" />
}if (score<70){
	Iccc = <img src={score_50} width="200px" />
}if (score<50){
	Iccc = <img src={score_40} width="200px" />
	
}if (score<40){
	Iccc = <img src={score_30} width="200px" />
}if (score<30){
	colorbg="error"
	Iccc = <img src={score_20} width="200px" />
}if (score<20){
	Iccc = <img src={score_0} width="200px" />
}
let dif_S =S_100_g[2][num_S-1]-S_100_g[2][num_S-2]
let arrow = (dif_S<0? Down:Up)
let Port = <div>
  <h4><span style={{color:(dif_S<0? '#FF0000':'#00FF7F'),fontSize:"18px"}}>{(dif_S<0? "ลด":"เพิ่ม")}จากเมื่อวาน {dif_S}% <img src={arrow} width="40px" style={{marginLeft:"-10px",marginBottom:"-5px"}}/></span></h4>
</div>
if (dif_S==0){
Port = <div>
  <h4>ไม่มีการเปลี่ยนแปลง <img src={no_Change} width="150px" style={{marginTop:"-25px",marginBottom:"-55px",marginLeft:"-50px"}}/></h4>
</div>
}
function Per_Port() {
	const { info, gradients } = colors;
	const { cardContent } = gradients;

	return (
		<Card
			sx={{
				height: '95%',
				background: linearGradient(gradients.cardDark.main, gradients.cardDark.state, gradients.cardDark.deg)
			}}>
			<VuiBox 
			
				height='281.5px'
				sx={{ width: '100%' }}>
				<VuiBox
					display='flex'
					alignItems='center'
					justifyContent='space-beetween'
					sx={{ width: '100%' }}
					mb='10px'>
					<VuiTypography variant='lg' color='white' mr='auto' fontWeight='bold'>
						% Capital Port
					</VuiTypography>
				</VuiBox>
				<VuiBox
					display='flex'
					sx={({ breakpoints }) => ({
						[breakpoints.up('xs')]: {
							flexDirection: 'column',
							gap: '16px',
							justifyContent: 'center',
							alignItems: 'center'
						},
						[breakpoints.up('md')]: {
							flexDirection: 'row',
							justifyContent: 'flex-start',
							alignItems: 'center'
						}
					})}>
					<Stack
						direction='column'
						spacing='10px'
						width='500px'
						maxWidth='50%'

						sx={({ breakpoints }) => ({
							mr: 'auto',
							[breakpoints.only('md')]: {
								mr: '75px'
							},
							[breakpoints.only('xl')]: {
								width: '500px',
								maxWidth: '40%'
							}
						})}>
						<VuiBox
							display='flex'
							width='220px'
							p='20px 22px'
							flexDirection='column'
							sx={({ breakpoints }) => ({
								background: linearGradient(cardContent.main, cardContent.state, cardContent.deg),
								borderRadius: '20px',
								[breakpoints.up('xl')]: {
									maxWidth: '150px !important'
								},
								[breakpoints.up('xxl')]: {
									minWidth: '180px',
									maxWidth: '100% !important'
								}
							})}>
							<VuiTypography color='text' variant='button' fontWeight='regular' mb='5px'>
								Date
							</VuiTypography>
							<VuiTypography color='white' variant='lg' fontWeight='bold'>
								{S_100_g[0][S_100_g[0].length-1]}
							</VuiTypography>
						</VuiBox>

						<VuiBox
							display='flex'
							width='240px'
							p='20px 22px'
							flexDirection='column'
							sx={({ breakpoints }) => ({
								background: linearGradient(cardContent.main, cardContent.state, cardContent.deg),
								borderRadius: '20px',
								[breakpoints.up('xl')]: {
									maxWidth: '240px !important'
								},
								[breakpoints.up('xxl')]: {
									minWidth: '240px',
									maxWidth: '100% !important'
								}
							})}>
							<VuiTypography color='white' variant='lg' fontWeight='bold'>
								{Port}
							</VuiTypography>
						</VuiBox>
					</Stack>
					
					<VuiButton variant="text" color="info" href='/dashboard/Port' target="_blank">
					<VuiBox sx={{ position: 'relative', display: 'inline-flex' }}>
						<CircularProgress
							variant='determinate'
							value={score}
							size={window.innerWidth >= 1024 ? 200 : window.innerWidth >= 768 ? 170 : 200}
							color= {colorbg}
							
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
							<VuiBox display='flex' flexDirection='column' justifyContent='center' alignItems='center'>
							
								<VuiTypography
									color='white'
									variant='d5'
									fontWeight='bold'
									mb='4px'
									sx={({ breakpoints }) => ({
										[breakpoints.only('xl')]: {
											fontSize: '32px'
										},
										transform: 'translateY(-30%)',
									})}>
										<div>{score}%</div>
									
								</VuiTypography>
								<VuiBox
		
								sx={{
									transform: 'translateY(25%)',
									width: '50px',
									height: '50px',
									borderRadius: '50%',
									display: 'flex',
									justifyContent: 'center',
									alignItems: 'center'
								}}>
								{Iccc}<br/>
					
							</VuiBox>	
							<VuiBox
							sx={{
								transform: 'translateY(40%)',
								width: '50px',
								height: '50px',
								borderRadius: '50%',
								display: 'flex',
								justifyContent: 'center',
								alignItems: 'center'
							}}>
							<img src={Zoom_p} width="40px" style={{marginBottom:"-2px"}} />
							</VuiBox>	
							
							</VuiBox>
							
						</VuiBox>

					</VuiBox>
					
					</VuiButton>
				</VuiBox>
			</VuiBox>
		</Card>
	);
}

export default Per_Port;
