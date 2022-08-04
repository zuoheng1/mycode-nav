import React, {useState} from 'react';
import {Avatar, Col, Layout, Menu, Row} from "antd";
import Search from "antd/es/input/Search";
import {Header} from "antd/es/layout/layout";
import {useLocation} from "@reach/router";
import {parse} from "query-string";
import {createFromIconfontCN} from '@ant-design/icons';
import logo from '../../assets/logo.png';
import {WEB_HOST} from "../../constant";

const IconFont = createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_2316101_26mu1eoa684h.js',
});

/**
 * 万能搜索页
 * @author codenav
 * @return {*}
 */
export default () => {

  const location = useLocation();
  console.log(location);
  const searchParams = parse(location.search)
  const [current, setCurrent] = useState('bing');
  const [searchText, setSearchText] = useState(searchParams['q']);

  const handleClick = (e) => {
    setCurrent(e.key);
  };

  const toNav = () => {
    window.location.replace(location.origin);
  }

  return (
    <div>
      <Layout>
        <Header style={{zIndex: 10}}>
          <Row align="middle" justify="center">
            <Col xl={1} lg={2} md={2} sm={3} xs={4}>
              <div onClick={toNav} style={{cursor: 'pointer'}}><Avatar shape="square" src={logo} /></div>
            </Col>
            <Col xl={7} lg={8} md={10} sm={11} xs={20}>
              <Search enterButton style={{display: 'block'}} size="large" defaultValue={searchText}
                      onSearch={(value) => setSearchText(value)} />
            </Col>
            <Col xl={16} lg={14} md={12} sm={10} xs={24}>
              <Menu theme="dark" mode="horizontal" selectedKeys={[current]} onClick={handleClick}
                    style={{float: 'right'}}>
                <Menu.Item key="bing"><IconFont type="icon-bing" />必应</Menu.Item>
                <Menu.Item key="juejin"><svg t="1659582826795" style={{verticalAlign:'middle'}} viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2131" id="mx_n_1659582826797" width="16" height="16"><path d="M465.189 161.792c-22.967 18.14-44.325 35.109-47.397 37.742l-5.851 4.68 10.971 8.632c5.998 4.827 11.85 9.508 13.02 10.532 1.17 1.024 17.993 14.336 37.156 29.696l34.962 27.795 5.267-3.95c2.925-2.194 23.259-18.432 45.348-35.986 21.943-17.555 41.253-32.768 42.716-33.646 1.609-1.024 2.779-2.194 2.779-2.78 0-0.438-9.655-8.63-21.504-17.846-11.995-9.363-22.674-17.847-23.845-18.871-15.945-13.02-49.737-39.059-50.76-39.059-0.586 0.147-19.896 14.922-42.862 33.061z m233.325 180.37C507.465 493.275 508.928 492.105 505.417 489.911c-3.072-1.902-11.556-8.485-64.073-50.03-9.07-7.168-18.578-14.775-21.358-16.823-2.78-2.194-8.777-6.875-13.312-10.532-4.68-3.657-10.679-8.339-13.312-10.533-13.165-10.24-71.095-56.027-102.107-80.457-5.852-4.681-11.41-8.485-12.142-8.485-0.731 0-10.971 7.754-22.674 17.116-11.703 9.508-22.674 18.286-24.284 19.456-1.755 1.17-5.12 3.95-7.46 6.144-2.34 2.34-4.828 4.096-5.413 4.096-3.072 0-0.731 3.072 6.437 8.777 4.096 3.218 8.777 6.875 10.094 8.046 1.316 1.024 10.24 8.045 19.748 15.506s23.26 18.286 30.428 23.99c19.31 15.215 31.89 25.308 127.853 101.084 47.836 37.742 88.796 69.779 90.844 71.095 3.657 2.487 3.95 2.487 7.46-0.292a1041.42 1041.42 0 0 0 16.092-12.727c6.875-5.413 14.775-11.703 17.554-13.897 30.135-23.699 80.018-63.05 81.774-64.512 1.17-1.024 12.434-9.802 24.868-19.603s37.888-29.696 56.32-44.324c18.579-14.629 46.227-36.425 61.733-48.567 15.506-12.142 27.794-22.528 27.502-23.26-0.878-1.17-57.637-47.104-59.978-48.274-0.731-0.439-18.578 12.727-39.497 29.257z" fill="#8a8a8a" p-id="2132"></path><path d="M57.93 489.326c-15.215 12.288-28.527 23.405-29.697 24.576-2.34 2.194-5.412-0.44 80.018 66.852 33.207 26.185 32.622 25.747 57.637 45.495 10.386 8.192 36.279 28.672 57.783 45.495 38.18 30.135 44.91 35.401 52.663 41.545 2.048 1.756 22.967 18.14 46.372 36.572 23.26 18.432 74.167 58.514 112.933 89.088 38.912 30.573 71.095 55.734 71.826 56.027 0.732 0.293 7.46-4.389 14.921-10.386 21.797-16.97 90.259-70.949 101.523-79.872 5.705-4.535 12.873-10.24 15.945-12.58 3.072-2.488 6.436-5.12 7.314-5.852 0.878-0.878 11.85-9.509 24.283-19.31 20.773-16.091 59.1-46.226 64.366-50.615 1.17-1.024 5.12-4.096 8.777-6.875 3.657-2.78 7.9-6.29 9.509-7.607 1.609-1.317 14.775-11.703 29.257-23.113 29.11-22.82 42.277-33.207 88.503-69.632 17.262-13.605 32.475-25.454 33.646-26.478 2.486-2.048 31.451-24.869 44.617-35.255 4.827-3.657 9.07-7.168 9.508-7.607 0.44-0.585 5.998-4.827 12.435-9.8 6.436-4.828 13.165-10.24 15.067-11.85l3.365-2.926-9.948-7.753c-5.412-4.388-10.24-8.192-10.679-8.63-1.17-1.317-22.381-18.433-30.135-24.284-3.95-3.072-7.314-5.998-7.606-6.73-1.317-3.071-6.73 0.147-29.258 17.994-13.458 10.532-25.746 20.187-27.355 21.504-1.61 1.463-10.533 8.338-19.749 15.652-9.216 7.168-17.115 13.459-17.554 13.898-0.439 0.438-6.583 5.412-13.897 10.971-7.168 5.559-15.214 11.703-17.7 13.75-4.974 4.097-5.413 4.39-20.334 16.239-5.56 4.388-11.264 8.777-12.435 9.8-1.17 1.025-20.333 16.092-42.422 33.354-22.09 17.408-41.546 32.768-43.155 34.084-1.609 1.463-14.482 11.557-28.525 22.528s-40.814 32.037-59.539 46.812c-18.578 14.775-42.276 33.353-52.516 41.399s-23.26 18.285-28.965 22.82l-10.386 8.339-4.389-3.072c-2.34-1.756-4.68-3.511-5.12-3.95-0.439-0.439-4.973-4.096-10.24-8.046-11.849-9.216-14.482-11.264-16.676-13.166-0.878-0.877-4.243-3.51-7.46-5.851-3.22-2.487-6.145-4.681-6.584-5.12-0.439-0.439-6.875-5.705-14.482-11.703-7.607-5.851-14.921-11.556-16.091-12.58-1.317-1.17-17.116-13.605-35.255-27.795-17.993-14.19-35.109-27.648-38.035-29.842-5.705-4.681-33.499-26.624-125.074-98.743-34.523-27.209-72.704-57.344-84.846-66.852-49.737-39.498-55.15-43.594-56.905-43.447-0.877 0-14.043 10.24-29.257 22.528z" fill="#8a8a8a" p-id="2133"></path></svg>掘金</Menu.Item>
                <Menu.Item key="360"><IconFont type="icon-360logo" />360</Menu.Item>
                <Menu.Item key="sogou"><IconFont type="icon-sogou" />搜狗</Menu.Item>
                <Menu.Item key="bilibili"><IconFont type="icon-bilibili-line" />B 站</Menu.Item>
                <Menu.Item key="gitee"><IconFont type="icon-gitee-fill-round" />Gitee</Menu.Item>
              </Menu>
            </Col>
          </Row>
        </Header>
        {
          current === "juejin" &&
          <iframe src={`https://juejin.cn/search?query==${searchText}`}
                  style={{border: 'none', width: '100%', height: '100vh', position: 'fixed', top: -32, zIndex: 1}}
          />
        }
        {
          current === "bing" &&
          <iframe src={`https://cn.bing.com/search?q=${searchText}`}
                  style={{border: 'none', width: '100%', height: '100vh', position: 'fixed', top: -30, zIndex: 1}}
          />
        }
        {
          current === "360" &&
          <iframe src={`https://www.so.com/s?q=${searchText}`}
                  style={{border: 'none', width: '100%', height: '100vh', position: 'fixed', top: -30, zIndex: 1}}
          />
        }
        {
          current === "sogou" &&
          <iframe src={`https://www.sogou.com/web?query=${searchText}`}
                  style={{border: 'none', width: '100%', height: '100vh', position: 'fixed', top: -30, zIndex: 1}}
          />
        }
        {
          current === "bilibili" &&
          <iframe src={`https://search.bilibili.com/all?keyword=${searchText}`}
                  style={{border: 'none', width: '100%', height: '100vh', position: 'fixed', top: -80, zIndex: 1}}
          />
        }
        {
          current === "gitee" &&
          <iframe src={`https://search.gitee.com/?q=${searchText}`}
                  style={{border: 'none', width: '100%', height: '100vh', position: 'fixed', top: -50, zIndex: 1}}
          />
        }
      </Layout>
    </div>
  )
}
