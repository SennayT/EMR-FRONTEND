import { Card, Typography, CardContent, Button } from "@mui/material";
import {
  VerticalTimeline,
  VerticalTimelineElement
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

export default function DiagnosisHistory() {
  return (
    <Card sx={{backgroundColor: 'white', marginTop: 5}}>
      <CardContent>
      <Typography  variant='h5' sx={{ fontWeight: 'bold', marginBottom: 3 }}>
        Diagnosis History
      </Typography>
      <VerticalTimeline lineColor='lightgrey'
      layout={"1-columns"} color={"black"}
      animate
      >
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background:'transparent',boxShadow:'none', color: "#000" }}
          date="2011 - present"
          iconStyle={{ background: "#56ca00", color: "#000" }}
        >
          <h3 className="vertical-timeline-element-title">Creative Director</h3>
          <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
          <p>
            Creative Direction, User Experience, Visual Design, Project
            Management, Team Leading
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background:'transparent',boxShadow:'none', color: "#000" }}
          date="2011 - present"
          iconStyle={{ background: "#56ca00", color: "#000" }}
        >
          <h3 className="vertical-timeline-element-title">Art Director</h3>
          <h4 className="vertical-timeline-element-subtitle">
            San Francisco, CA
          </h4>
          <p>
            Creative Direction, User Experience, Visual Design, SEO, Online
            Marketing
          </p>
        </VerticalTimelineElement>

      </VerticalTimeline>
      <Button
      >
Show More
      </Button>
      </CardContent>
    </Card>
  );
}
