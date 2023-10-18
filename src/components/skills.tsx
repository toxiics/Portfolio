import { Component } from "react";
import { Progress } from "./ui/progress";

import azure from "@/assets/azure.png";
import git from "@/assets/git.png";
import office from "@/assets/office.png";
import postgreSql from "@/assets/postgresql.png";
import sqlServer from "@/assets/sql-server.png";
import vsStudioCode from "@/assets/vs-studio-code.jpeg";
import vsCode from "@/assets/vscode.jpeg";

const skills = [
	{
		name: "HTML / CSS",
		value: 90,
	},
	{
		name: "Javascript/Typescript",
		value: 80,
	},
	{
		name: "ReactJS",
		value: 70,
	},
	{
		name: "C# / .NET Core",
		value: 60,
	},
	{
		name: "SQL",
		value: 60,
	},
	{
		name: "NodeJS (ExpressJS)",
		value: 50,
	},
	{
		name: "Angular v6-14",
		value: 75,
	},
	{
		name: "Python",
		value: 20,
	},
];

const tools = [
	{
		name: "Visual Studio Code",
		image: vsStudioCode,
	},
	{
		name: "Visual Studio",
		image: vsCode,
	},
	{
		name: "PostgreSQL",
		image: postgreSql,
	},
	{
		name: "SQL Server",
		image: sqlServer,
	},
	{
		name: "Git",
		image: git,
	},
	{
		name: "Office",
		image: office,
	},
	{
		name: "Azure",
		image: azure,
	},
];

export default class SkillsComponent extends Component {
	render() {
		return (
			<div className="">
				<div className="p-4">
					<h2 className="text-2xl font-bold">Compétences techniques</h2>
					<div className="mt-8">
						{skills
							.sort((a, b) => b.value - a.value)
							.map((skill, index) => {
								return (
									<div
										key={index}
										className="my-2 flex justify-items-center items-center space-x-4"
									>
										<span className="text-[1.5rem] text-left text-ellipsis font-mono font-semibold w-1/3">
											{skill.name}
										</span>
										<Progress
											value={skill.value}
											className={`w-[80%] h-6 ml-4 bg-blue-500`}
										/>
									</div>
								);
							})}
					</div>
				</div>

				<div className="p-4">
					<h2 className="text-2xl font-bold">Outils</h2>
					<div className="mt-4 justify-center grid grid-cols-3">
						{tools.map((skill, index) => {
							return (
								<div
									key={index}
									className="flex flex-col items-center self-center space-x-4"
								>
									<img
										src={skill.image}
										className={`w-1/2 m-4 bg-blue-500`}
									/>
									<span className="text-center font-mono font-semibold">
										{skill.name}
									</span>
								</div>
							);
						})}
					</div>
				</div>
			</div>
		);
	}
}
