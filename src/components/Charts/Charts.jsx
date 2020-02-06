import React from 'react';
import {Header} from "../common/Header";
import {Breadcrumbs} from "../common/Breadcrumbs";
import {Footer} from "../common/Footer";
import usersAPI from "../../api/api";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_spiritedaway from "@amcharts/amcharts4/themes/spiritedaway";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import DatePicker from "react-datepicker";


export class Charts extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            user: null,
            clicks: null,
            page_views: null,
            maxDate: null,
            pastDate: null,
            startDate: null,
            endDate: null
        };
    }

    amcharts(dataArray) {
        let am4themes_myTheme = (target) => {
            if (target instanceof am4core.InterfaceColorSet) {
                target.setFor("grid", am4core.color("#7E7E7E"));
            }
        };
        am4core.useTheme(am4themes_spiritedaway);
        am4core.useTheme(am4themes_animated);
        am4core.useTheme(am4themes_myTheme);

        let newChart = (chartName) => {
            let chart = am4core.create("chart_" + chartName, am4charts.XYChart);
            chart.data = dataArray;

// Set input format for the dates
            chart.dateFormatter.inputDateFormat = "yyyy-MM-dd";

// Create axes
            let dateAxis = chart.xAxes.push(new am4charts.DateAxis());
            let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
            dateAxis.renderer.grid.template.strokeWidth = 0;
            valueAxis.renderer.labels.template.fill = am4core.color("#cccccc");
            dateAxis.renderer.labels.template.fill = am4core.color("#cccccc");
            dateAxis.marginTop = 10;
// Create series
            let series = chart.series.push(new am4charts.LineSeries());
            series.dataFields.valueY = chartName;
            series.dataFields.dateX = "date";
            series.tooltipText = "{" + chartName + "}";
            series.strokeWidth = 3;
            series.minBulletDistance = 15;

            series.stroke = am4core.color("#3A80BA");

// Drop-shaped tooltips
            series.tooltip.background.cornerRadius = 100;
            series.tooltip.background.strokeOpacity = 0;
            series.tooltip.pointerOrientation = "vertical";
            series.tooltip.label.minWidth = 20;
            series.tooltip.label.minHeight = 20;
            series.tooltip.label.textAlign = "middle";
            series.tooltip.label.textValign = "middle";
            series.tooltip.autoTextColor = false;
            series.tooltip.getFillFromObject = false;
            series.tooltip.label.fill = am4core.color("#ffffff");
            series.tooltip.background.fill = am4core.color("#3A80BA");

            chart.cursor = new am4charts.Cursor();

            return chart;
        }

        if (this.state.user) {
            this.setState({
                clicks: newChart("clicks"),
                page_views: newChart("page_views")
            })
        }


    }

    disposeAll() {
        if (this.state.clicks) {
            this.state.clicks.dispose();
            this.state.page_views.dispose();
        }
    }

    onDatePickingStart(date) {
        this.disposeAll();
        let userId = parseInt(this.props.match.params.userId);
        usersAPI.getUserByID(userId, date, this.state.endDate).then(r => {
                this.setState({startDate: date});
                usersAPI.getUserStatsInPeriod(userId, date, this.state.endDate).then(result => {
                    const filled = usersAPI.fillEmptyDaysInStats(result, date, this.state.endDate);
                    this.amcharts(filled);
                });
            }
        );
    }

    onDatePickingEnd(date) {
        this.disposeAll();
        let userId = parseInt(this.props.match.params.userId);
        usersAPI.getUserByID(userId, this.state.startDate, date).then(r => {
            this.setState({endDate: date});
            usersAPI.getUserStatsInPeriod(userId, this.state.startDate, date).then(result => {
                const filled = usersAPI.fillEmptyDaysInStats(result, this.state.startDate, date);
                this.amcharts(filled);
            });
        })
    }

    componentDidMount() {
        let userId = parseInt(this.props.match.params.userId);
        const promise1 = usersAPI.getMaxDate(userId);
        const promise2 = usersAPI.getUserByID(userId, this.state.pastDate, this.state.maxDate);

        Promise.all([promise1, promise2]).then(r => {
                this.setState({
                    maxDate: r[0].maxDate,
                    minDate: r[0].minDate,
                    pastDate: r[0].pastDate,
                    startDate: r[0].pastDate,
                    endDate: r[0].maxDate,
                    user: r[1].person
                });
                usersAPI.getUserStatsInPeriod(userId, this.state.pastDate, this.state.maxDate).then(result => {
                    const filled = usersAPI.fillEmptyDaysInStats(result, this.state.pastDate, this.state.maxDate);
                    this.amcharts(filled);
                });
            }
        );

    }

    render() {
        return (
            <div className="fullscreen">
                <section className="fullscreen-wrapper">
                    <Header/>
                    {this.state.user &&
                    <Breadcrumbs name={`${this.state.user.first_name} ${this.state.user.last_name}`}/>}
                    {this.state.user ?
                        (<section className="users">
                            <div className="users-wrap wrap">
                                <div className="users-top">
                                    <div
                                        className="users-headline charts">{`${this.state.user.first_name} ${this.state.user.last_name}`}</div>
                                    <div className="users-datepickers">
                                        <DatePicker
                                            selected={this.state.startDate}
                                            onChange={date => {
                                                this.onDatePickingStart(date);
                                                this.setState({startDate: date})
                                            }}
                                            selectsStart
                                            dateFormat={'dd-MM-yyyy'}
                                            minDate={this.state.minDate}
                                            maxDate={this.state.endDate}
                                        />
                                        <span>—</span>
                                        <DatePicker
                                            selected={this.state.endDate}
                                            onChange={date => {
                                                this.onDatePickingEnd(date);
                                                this.setState({endDate: date})
                                            }}
                                            selectsEnd
                                            minDate={this.state.startDate}
                                            maxDate={this.state.maxDate}
                                            dateFormat={'dd-MM-yyyy'}
                                        />
                                    </div>

                                </div>

                                <div className="firstChart">
                                    <div className="firstChart-headline">Clicks</div>
                                    <div className="firstChart-chart" id="chart_clicks"/>
                                </div>
                                <div className="secondChart">
                                    <div className="secondChart-headline second">Views</div>
                                    <div className="secondChart-chart" id="chart_page_views"/>
                                </div>

                            </div>
                        </section>) : <h1 className="wrap">Такого пользователя нет</h1>
                    }
                </section>
                <section className="fullscreen-bottom">
                    <Footer/>
                </section>
            </div>
        )

    }

    componentWillUnmount() {
        this.disposeAll();
    }
}


