import React, { useMemo, useState } from "react";
import FormControl from "@mui/material/FormControl";
import Typography from "@mui/material/Typography";
import HighwayIcon from "@mui/icons-material/LocalAtm";
import LocalGasStationIcon from "@mui/icons-material/LocalGasStation";
import InputAdornment from "@mui/material/InputAdornment";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemSecondaryAction from "@mui/material/ListItemSecondaryAction";
import ListItemText from "@mui/material/ListItemText";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import { Box, Button, Fab, Switch } from "@mui/material";
import { CarCrash, CheckOutlined, SwapHoriz } from "@mui/icons-material";
import fuelConsumptionByModel from "./models";
import OutlinedCard from "@/components/OutlinedCard/index";

interface FuelConsumptionCalculatorState {
	distance: number;
	brand: string;
	model: string;
	highwayFee: number;
	fuelPrice: number;
	noob: boolean;
	totalCost: number;
	consumption: number;
	twoSide: boolean;
}

function topFunction() {
	document.body.scrollTop = 0; // For Safari
	document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

export default function FuelConsumptionCalculator() {
	const [state, setState] = useState<FuelConsumptionCalculatorState>({
		distance: 100,
		brand: "",
		model: "",
		twoSide: false,
		noob: false,
		highwayFee: 0,
		fuelPrice: 8.02,
		totalCost: 0,
		consumption: 0,
	});
	const [open, setOpen] = React.useState(false);

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	const handleChange = (
		event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
	) => {
		const { name, value } = event.target;

		if (name === "brand") {
			setState({ ...state, brand: value, model: "" });
		}

		setState({ ...state, [name]: value });
	};

	const selectedModel = useMemo(() => {
		if (!state.model || !state.brand) {
			return null;
		}

		return fuelConsumptionByModel[state.brand].models.find(
			(m) => m.name === state.model
		);
	}, [state.model, state.brand]);

	const calculateCost = (): void => {
		const { distance, highwayFee, fuelPrice, twoSide, consumption, noob } =
			state;

		if (consumption === 0 && !selectedModel) {
			return;
		}

		const fuelConsumption =
			consumption > 0 ? consumption : selectedModel.consumption;

		const fuelCost =
			((twoSide ? distance * 2 : distance) / 100) *
			(fuelConsumption * (noob ? 1.1 : 1)) *
			fuelPrice;
		const totalCost: number =
			Number(fuelCost) + Number(twoSide ? highwayFee * 2 : highwayFee);
		setState({ ...state, totalCost });
		topFunction();
	};

	return (
		<>
			<Dialog
				open={open}
				onClose={handleClose}
				PaperProps={{
					component: "form",
					onSubmit: (event: React.FormEvent<HTMLFormElement>) => {
						event.preventDefault();
						const formData = new FormData(event.currentTarget);
						const formJson = Object.fromEntries(
							(formData as any).entries()
						);
						setState({
							...state,
							consumption: formJson.consumption,
						});

						handleClose();
					},
				}}
			>
				<DialogTitle>自定义油耗数据</DialogTitle>
				<DialogContent>
					<TextField
						autoFocus
						required
						margin="dense"
						id="consumption"
						name="consumption"
						label="L / 100km"
						type="float"
						fullWidth
						defaultValue={state.consumption}
						variant="standard"
					/>
				</DialogContent>
				<DialogActions>
					<Button
						onClick={() => {
							setState({ ...state, consumption: 0 });

							handleClose();
						}}
					>
						清空
					</Button>
					<Button type="submit">确认</Button>
				</DialogActions>
			</Dialog>
			<Box display="flex" justifyContent="center" sx={{ width: "100%" }}>
				<Box sx={{ maxWidth: "600px" }}>
					{state.totalCost > 0 && (
						<>
							<br />
							<Typography textAlign="center" variant="h5">
								本行程总计开销&nbsp;
								<span className="Textc(green)">
									{Math.floor(state.totalCost * 100) / 100}
								</span>
								&nbsp;元
							</Typography>
							<br />
						</>
					)}

					<FormControl fullWidth>
						<TextField
							name="distance"
							label="里程 (km)"
							type="number"
							value={state.distance}
							onChange={handleChange}
							margin="normal"
						/>
					</FormControl>

					<br />
					<br />
					<Box sx={{ display: "flex", gap: 1 }}>
						<FormControl fullWidth margin="normal">
							<InputLabel id="brand-label">品牌</InputLabel>
							<Select
								labelId="brand-label"
								name="brand"
								value={state.brand}
								onChange={handleChange}
								disabled={state.consumption > 0}
								label="Brand"
							>
								{Object.keys(fuelConsumptionByModel).map(
									(brand) => (
										<MenuItem key={brand} value={brand}>
											{fuelConsumptionByModel[brand].name}
										</MenuItem>
									)
								)}
							</Select>
						</FormControl>
						<FormControl fullWidth margin="normal">
							<InputLabel id="model-label">车型</InputLabel>
							<Select
								labelId="model-label"
								name="model"
								value={state.model}
								onChange={handleChange}
								label="车型"
								disabled={!state.brand || state.consumption > 0}
							>
								{state.brand &&
									fuelConsumptionByModel[
										state.brand
									].models.map((model) => (
										<MenuItem
											key={model.name}
											value={model.name}
										>
											{model.name}
										</MenuItem>
									))}
							</Select>
						</FormControl>
					</Box>
					<Typography variant="body2">
						{selectedModel &&
							state.consumption === 0 &&
							`该车型综合油耗大约为
						${selectedModel.consumption}
						L/100km。`}
						{state.consumption > 0 &&
							`正在使用自定义油耗：${state.consumption} L/100km`}
						<Button onClick={handleClickOpen} size="small">
							自定义数据...
						</Button>
					</Typography>
					<br />
					<Box sx={{ display: "flex", gap: 1 }}>
						<FormControl fullWidth>
							<TextField
								name="highwayFee"
								label="通行费"
								type="number"
								value={state.highwayFee}
								onChange={handleChange}
								margin="normal"
								InputProps={{
									startAdornment: (
										<InputAdornment position="start">
											<HighwayIcon />
										</InputAdornment>
									),
								}}
							/>
						</FormControl>
						<FormControl fullWidth>
							<TextField
								name="fuelPrice"
								label="油价（每升）"
								type="number"
								value={state.fuelPrice}
								onChange={handleChange}
								margin="normal"
								InputProps={{
									startAdornment: (
										<InputAdornment position="start">
											<LocalGasStationIcon />
										</InputAdornment>
									),
								}}
							/>
						</FormControl>
					</Box>
					<br />
					<OutlinedCard padding={1}>
						<List>
							<ListItem>
								<ListItemIcon>
									<SwapHoriz />
								</ListItemIcon>
								<ListItemText
									primary="添加返程"
									secondary="启用后，油费和过路费将按两倍计算"
								/>
								<ListItemSecondaryAction>
									<Switch
										edge="end"
										checked={state.twoSide}
										onChange={(_, checked) => {
											setState({
												...state,
												twoSide: checked,
											});
										}}
										inputProps={{
											"aria-labelledby": "往返模式",
										}}
									/>
								</ListItemSecondaryAction>
							</ListItem>
							<ListItem>
								<ListItemIcon>
									<CarCrash />
								</ListItemIcon>
								<ListItemText
									primary="新手油耗"
									secondary="启用后，油耗将上升 10%"
								/>
								<ListItemSecondaryAction>
									<Switch
										edge="end"
										checked={state.noob}
										onChange={(_, checked) => {
											setState({
												...state,
												noob: checked,
											});
										}}
										inputProps={{
											"aria-labelledby": "往返模式",
										}}
									/>
								</ListItemSecondaryAction>
							</ListItem>
						</List>
					</OutlinedCard>
					<br />
					<br />
					<br />
					<Box sx={{ display: "flex", justifyContent: "center" }}>
						<Fab
							color="primary"
							onClick={calculateCost}
							disabled={
								!(
									(state.brand && state.model) ||
									state.consumption > 0
								)
							}
						>
							<CheckOutlined />
						</Fab>
					</Box>
					<br />
					<br />
				</Box>
			</Box>
		</>
	);
}
